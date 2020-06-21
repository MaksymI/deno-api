import {
    IRequest,
    IResponse,
    Next,
} from 'https://deno.land/x/snowlight/mod.ts';
import {
    createUserService,
    getUserService,
    updateUserService,
    removeUserService,
} from '../services/userServices.ts';

export const createUser = async (req: IRequest, res: IResponse, next: Next) => {
    try {
        const serviceCall = await createUserService(req.body);
        return res.status(200).send(serviceCall);
    } catch (e) {
        next(e);
    }
};

export const getUserDetails = async (
    req: IRequest,
    res: IResponse,
    next: Next
) => {
    try {
        const serviceCall = await getUserService(req.params);
        return res.status(200).send('Get User Data');
    } catch (e) {
        next(e);
    }
};

export const updateUser = async (req: IRequest, res: IResponse, next: Next) => {
    try {
        const serviceCall = await updateUserService(req.params, req.body);
        return res.status(200).send(serviceCall);
    } catch (e) {
        next(e);
    }
};

export const removeUser = async (req: IRequest, res: IResponse, next: Next) => {
    try {
        const serviceCall = await removeUserService(req.params);
        return res.status(200).send(serviceCall);
    } catch (e) {
        next(e);
    }
};
