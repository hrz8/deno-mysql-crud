export default {
    create(ctx: any, bodyData: any) {
        const { type, value: body } = bodyData;

        if (type !== 'json') {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'please provide request in json'
            };
            return;
        }

        if (!body) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'please provide the required data'
            };
            return;
        }
    
        const requiredFields = ['first_name', 'email', 'phone_number', 'address'];
        for (const field of requiredFields) {
            if (!body[field]) {
                ctx.response.status = 422;
                ctx.response.body = {
                    status: 422,
                    message: `${field} field is required`
                };
                return;
            }
        }
    
        return body;
    },

    get(ctx: any, paramsData: any) {
        const { id } = paramsData;
        const rgxNumber: RegExp = /^\d+$/;

        if (!rgxNumber.test(id)) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'params value must be number'
            };
            return;
        };

        return { id: Number(id) };
    },

    update(ctx: any, paramsData: any, bodyData: any) {
        let totalFieldsWillUpdate = 0;

        const { id } = paramsData;
        const { type, value: body } = bodyData;

        const rgxNumber: RegExp = /^\d+$/;
        if (!rgxNumber.test(id)) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'params value must be number'
            };
            return;
        };

        if (type !== 'json') {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'please provide request in json'
            };
            return;
        }

        if (!body) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'please provide the required data'
            };
            return;
        }

        const requiredFields = ['first_name', 'email', 'phone_number', 'address'];
        for (const field of requiredFields) {
            if (body[field]) {
                totalFieldsWillUpdate++;
            }
        }

        if (totalFieldsWillUpdate === 0) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'field is not valid'
            };
            return;
        }

        return { id: Number(id), body };
    }
}