package com.jeison.to_do.infrastructure.abstract_services.base;

public interface ICreateService<RQ,RS> {

    RS create(RQ rq);

}
