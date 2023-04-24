import {
  GiClick,
  GiHeartPlus,
  GiPodiumSecond,
  GiThumbUp,
  GiLaserWarning,
  GiStopSign,
} from 'react-icons/gi';
import logo from './logo.png';
import Button from './Button';

function ButtonPage() {
  const handleClick = () => {
    alert('You clicked the button');
  };

  return (
    <div>
      <nav className="flex justify-left mb-5 p-5 bg-emerald-50">
        <img alt="logo" src={logo} className="w-28" />
        <span className="uppercase text-3xl text-green-600 text-center w-11/12">
          Buttons
        </span>
      </nav>
      <article className="container mt-24">
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button className="m-5" primary>
            <GiHeartPlus />
            primary
          </Button>
          <Button className="m-5" primary rounded>
            <GiHeartPlus />
            rounded
          </Button>
          <Button className="m-5" primary outline>
            <GiHeartPlus />
            outline
          </Button>
          <Button className="m-5" primary rounded outline>
            <GiHeartPlus />
            rounded outline
          </Button>
        </section>
        <hr />
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button className="m-5" secondary>
            <GiPodiumSecond />
            secondary
          </Button>
          <Button className="m-5" secondary rounded>
            <GiPodiumSecond />
            rounded
          </Button>
          <Button className="m-5" secondary outline>
            <GiPodiumSecond />
            outline
          </Button>
          <Button className="m-5" secondary rounded outline>
            <GiPodiumSecond />
            rounded outline
          </Button>
        </section>
        <hr />
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button className="m-5" success>
            <GiThumbUp />
            success
          </Button>
          <Button className="m-5" success rounded>
            <GiThumbUp />
            rounded
          </Button>
          <Button className="m-5" success outline>
            <GiThumbUp />
            outline
          </Button>
          <Button className="m-5" success rounded outline>
            <GiThumbUp />
            rounded outline
          </Button>
        </section>
        <hr />
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button className="m-5" warning>
            <GiLaserWarning />
            warning
          </Button>
          <Button className="m-5" warning rounded>
            <GiLaserWarning />
            rounded
          </Button>
          <Button className="m-5" warning outline>
            <GiLaserWarning />
            outline
          </Button>
          <Button className="m-5" warning rounded outline>
            <GiLaserWarning />
            rounded outline
          </Button>
        </section>
        <hr />
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button className="m-5" danger>
            <GiStopSign />
            danger
          </Button>
          <Button className="m-5" danger rounded>
            <GiStopSign />
            rounded
          </Button>
          <Button className="m-5" danger outline>
            <GiStopSign />
            outline
          </Button>
          <Button className="m-5" danger rounded outline>
            <GiStopSign />
            rounded outline
          </Button>
        </section>
        <hr />
        <section className="mt-24 flex justify-around">
          <Button className="m-5" success rounded onClick={handleClick}>
            <GiClick className="animate-pulse" />
            Click Me!!! (button with event handler)
          </Button>
        </section>
      </article>
    </div>
  );
}

export default ButtonPage;
