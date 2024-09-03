package com.jeison.to_do.infrastructure.abstract_services.base;

import java.util.List;

public interface IGetAllService<RS> {
    List<RS> getAll();
}
