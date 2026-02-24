import Table from "./components/Table";
import type { Athlete } from "./types/athlete.types";
import athletesData from "./athletes.json";

const App = () => <Table data={athletesData as Athlete[]} />;

export default App;
