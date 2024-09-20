import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-5">
      <div className="flex gap-x-4 items-center">
        <Button size="sm">눌러보세요</Button>
        <Button onClick={() => alert("눌렀음")}>눌러보세요</Button>
        <Button size="lg">눌러보세요</Button>
        <Button outline>눌러보세요</Button>
        <Button rounded="pill">눌러보세요</Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="secondary">
          눌러보세요
        </Button>
        <Button intent="secondary">눌러보세요</Button>
        <Button size="lg" intent="secondary">
          눌러보세요
        </Button>
        <Button intent="secondary" outline>
          눌러보세요
        </Button>
        <Button intent="secondary" rounded="pill">
          눌러보세요
        </Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="warning">
          눌러보세요
        </Button>
        <Button intent="warning">눌러보세요</Button>
        <Button size="lg" intent="warning">
          눌러보세요
        </Button>
        <Button intent="warning" outline>
          눌러보세요
        </Button>
        <Button intent="warning" rounded="pill" outline>
          눌러보세요
        </Button>
      </div>
      <div className="flex gap-x-4 items-center">
        <Button size="sm" intent="danger">
          눌러보세요
        </Button>
        <Button intent="danger">눌러보세요</Button>
        <Button size="lg" intent="danger">
          눌러보세요
        </Button>
        <Button intent="danger" outline>
          눌러보세요
        </Button>
        <Button intent="danger" rounded="pill" outline>
          눌러보세요
        </Button>
      </div>
    </div>
  );
}

export default App;
