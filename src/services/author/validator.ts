export default {
    async create(ctx: any) {
        const { type, value: body } = await ctx.request.body();

        if (type !== 'json') {
            ctx.response.status = 400;
            ctx.response.body = { error: 'Please provide request in json' };
            return;
        }

        if (!body) {
            ctx.response.status = 400;
            ctx.response.body = { error: 'Please provide the required data' };
            return;
        }
    
        const requiredFields = ['firstName', 'email', 'phoneNumber', 'address'];
        for (const field of requiredFields) {
            if (!body[field]) {
                ctx.response.status = 400;
                ctx.response.body = { error: `${field} field is required` };
                return;
            }
        }
    
        return body;
      }
}