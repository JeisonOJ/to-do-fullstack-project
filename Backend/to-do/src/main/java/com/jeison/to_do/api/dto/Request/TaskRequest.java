package com.jeison.to_do.api.dto.Request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskRequest {
    @NotBlank(message = "title required")
    @Size(min = 4, max = 100, message = "title must between 4 and 100 characters")
    private String title;
    @NotBlank(message = "description required")
    private String description;
    private boolean completed;
}
