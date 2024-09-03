package com.jeison.to_do.infrastructure.abstract_services.base;

public interface CrudService<RS,RQ,ID> extends IGetAllService<RS>, IGetByIdService<RS,ID>, ICreateService<RQ,RS>, IUpdateService<RQ, RS, ID>, IDeleteService<ID> {

}
