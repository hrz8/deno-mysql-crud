export default {
  async notFound(ctx: any, id: number) {
    const message = `author with id ${id} not exist`;
    ctx.response.status = 404;
    ctx.response.body = {
      status: 400,
      message,
    };
  },
};
