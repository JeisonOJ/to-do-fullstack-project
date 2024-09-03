package com.jeison.to_do.infrastructure.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeison.to_do.api.dto.Request.TaskRequest;
import com.jeison.to_do.api.dto.Response.TaskResponse;
import com.jeison.to_do.domain.entities.Task;
import com.jeison.to_do.domain.repositories.TaskRepository;
import com.jeison.to_do.infrastructure.abstract_services.ITaskService;
import com.jeison.to_do.infrastructure.mappers.TaskMapper;
import com.jeison.to_do.utils.exceptions.BadRequestException;
import com.jeison.to_do.utils.messages.ErrorMessage;

@Service
public class TaskService implements ITaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private TaskMapper taskMapper;

    @Override
    public List<TaskResponse> getAll() {
        return taskMapper.toResponse(taskRepository.findAll());
    }

    @Override
    public TaskResponse getById(Long id) {
        return taskMapper.toResponse(findById(id));
    }

    @Override
    public TaskResponse create(TaskRequest rq) {
        return taskMapper.toResponse(taskRepository.save(taskMapper.toEntity(rq)));
    }

    @Override
    public TaskResponse update(Long id, TaskRequest rq) {
        Task task = findById(id);
        taskMapper.updateTask(rq, task);
        task.setUpdatedAt(LocalDateTime.now());
        return taskMapper.toResponse(taskRepository.save(task));
    }

    @Override
    public void delete(Long id) {
        findById(id);
        taskRepository.deleteById(id);
    }

    private Task findById(Long id) {
        return taskRepository.findById(id).orElseThrow(() -> new BadRequestException(ErrorMessage.idNotFound("Task")));
    }

}
