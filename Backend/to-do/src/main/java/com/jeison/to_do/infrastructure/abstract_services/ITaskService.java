package com.jeison.to_do.infrastructure.abstract_services;

import com.jeison.to_do.api.dto.Request.TaskRequest;
import com.jeison.to_do.api.dto.Response.TaskResponse;
import com.jeison.to_do.infrastructure.abstract_services.base.CrudService;

public interface ITaskService extends CrudService<TaskResponse, TaskRequest, Long> {

}
