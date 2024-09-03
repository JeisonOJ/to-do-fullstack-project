package com.jeison.to_do.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeison.to_do.api.dto.Request.TaskRequest;
import com.jeison.to_do.api.dto.Response.TaskResponse;
import com.jeison.to_do.api.errors.ErrorResp;
import com.jeison.to_do.infrastructure.abstract_services.ITaskService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private ITaskService taskService;

    @Operation(summary = "Get the entire tasks list")
    @GetMapping
    public ResponseEntity<List<TaskResponse>> getAll() {
        return ResponseEntity.ok(taskService.getAll());
    }

    @Operation(summary = "Get a task by its ID number")
    @ApiResponse(responseCode = "400", description = "When the ID is not found", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResp.class))
    })
    @GetMapping("/{id}")
    public ResponseEntity<TaskResponse> getById(Long id) {
        return ResponseEntity.ok(taskService.getById(id));
    }

    @Operation(summary = "Create a task")
    @ApiResponse(responseCode = "400", description = "When the request is not valid", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResp.class))
    })
    @PostMapping
    public ResponseEntity<TaskResponse> create(TaskRequest rq) {
        return ResponseEntity.ok(taskService.create(rq));
    }

    @Operation(summary = "Update a tasks by its ID number")
    @ApiResponse(responseCode = "400", description = "When the request is not valid", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResp.class))
    })
    @PutMapping("/{id}")
    public ResponseEntity<TaskResponse> update(Long id, TaskRequest rq) {
        return ResponseEntity.ok(taskService.update(id, rq));
    }

    @Operation(summary = "Delete a task by its ID number")
    @ApiResponse(responseCode = "204", description = "task deleted successfully")
    @ApiResponse(responseCode = "400", description = "When the ID is not found", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResp.class))
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(Long id) {
        taskService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
