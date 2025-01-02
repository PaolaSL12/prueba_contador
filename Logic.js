export const handleDecrement = (counter, setCounter, setMessage) => {
    if (counter > 0) {
      setCounter(counter - 1);
      setMessage("")
    }
  };

export const handleIncrement = (counter, setCounter, setMessage) => {
    if (counter < 10 ) {
      setCounter(counter + 1)
      setMessage("")
    } else {
      setMessage("Se ha alcanzado el valor maximo")
    }
  }

export const handelReset = (setCounter, setMessage) => {
    setCounter(0)
    setMessage("")
  };