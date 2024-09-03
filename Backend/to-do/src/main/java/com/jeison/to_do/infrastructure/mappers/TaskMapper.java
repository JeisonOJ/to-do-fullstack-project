package com.jeison.to_do.infrastructure.mappers;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.jeison.to_do.api.dto.Request.TaskRequest;
import com.jeison.to_do.api.dto.Response.TaskResponse;
import com.jeison.to_do.domain.entities.Task;

@Mapper(componentModel = "spring")
public interface TaskMapper {

    TaskResponse toResponse(Task task);

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "createdAt", ignore = true),
            @Mapping(target = "updatedAt", ignore = true)
    })
    Task toEntity(TaskRequest rq);

    List<TaskResponse> toResponse(List<Task> tasks);
}
