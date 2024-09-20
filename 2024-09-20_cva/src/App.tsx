import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-5">
      <div className="flex gap-x-4 items-center">
        <Button size="sm">안녕하세요</Button>
        <Button>안녕하세요</Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="secondary">
          안녕하세요
        </Button>
        <Button intent="secondary">안녕하세요</Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="warning">
          안녕하세요
        </Button>
        <Button intent="warning">안녕하세요</Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="danger">
          안녕하세요
        </Button>
        <Button intent="danger">안녕하세요</Button>
      </div>
    </div>
  );
}

export default App;
