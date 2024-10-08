package com.jeison.to_do.domain.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeison.to_do.domain.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
