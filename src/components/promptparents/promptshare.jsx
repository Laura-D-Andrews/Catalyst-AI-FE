import React, { useState } from "react";
import CreativeWriting from "../mediums/creativewriting";
import Create from "../create.jsx";

const PromptParents = ({ postId }) => {
  const [output, setOutput] = useState("");
  const [note, setNote] = useState("");
  const [generativeSpace, setGenerativeSpace] = useState(false);
  const [movementGenerativeSpace, setMovementGenerativeSpace] = useState(false);

  return (
    <>
      {generativeSpace ? (
        <Create postId={postId} output={output} />
      ) : (
        <CreativeWriting
          setOutput={setOutput}
          output={output}
          setGenerativeSpace={setGenerativeSpace}
        />
      )}
    </>
  );
};

export default PromptParents;