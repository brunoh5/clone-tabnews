import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <ShowAPIStatus />
    </>
  );
}

function UpdatedAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-br");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function ShowAPIStatus() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  return isLoading ? (
    <div>Carregando...</div>
  ) : (
    <>
      <div>Versão do PostgreSQL: {data.dependencies.database.version}</div>
      <div>Conexões máximas: {data.dependencies.database.max_connections}</div>
      <div>
        Conexões abertas: {data.dependencies.database.opened_connections}
      </div>
    </>
  );
}
