import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex">
        <div className="w-2/12 h-screen bg-[#262626]"></div>

        <div className=" w-8/12 bg-[#171717]">
          <div className="pt-8">
            <h1 className="text-white text-center text-4xl font-bold uppercase">
              JUST TODO
            </h1>
              <AddTodo />
              <Todos />
          </div>
        </div>

        <div className="w-2/12 h-screen bg-[#262626]"></div>
      </div>
    </>
  );
}

export default App;
