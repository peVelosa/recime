import server from "@/server.json";

export const GET = async () => {
  const { data } = server;

  return Response.json(data);
};
