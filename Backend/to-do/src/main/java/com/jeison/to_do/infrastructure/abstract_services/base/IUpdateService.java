package com.jeison.to_do.infrastructure.abstract_services.base;

public interface IUpdateService<RQ, RS, ID> {
    RS update(ID id, RQ rq);
}
