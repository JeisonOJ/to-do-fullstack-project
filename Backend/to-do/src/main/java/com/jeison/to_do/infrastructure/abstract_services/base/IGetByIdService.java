package com.jeison.to_do.infrastructure.abstract_services.base;

public interface IGetByIdService<RS,ID> {
    RS getById(ID id);
}
