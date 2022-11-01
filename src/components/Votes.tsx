import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [flavor, setFlavor] = useState<string>();
  const [vote, setVote] = useState<boolean>();

  return <section className="Votes"></section>;
};

export default Votes;
