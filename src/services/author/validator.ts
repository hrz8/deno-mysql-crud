export default {
    async create(ctx: any) {
        const { type, value: body } = await ctx.request.body();

        if (type !== 'json') {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'Please provide request in json'
            };
            return;
        }

        if (!body) {
            ctx.response.status = 400;
            ctx.response.body = {
                status: 400,
                message: 'Please provide the required data'
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
      }
}