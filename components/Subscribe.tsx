import { FormEvent, RefObject, useEffect, useRef } from "react";
import { useButtonDown } from "use-button-down";
import LoadingSpinner from "./LoadingSpinner";

const Subscribe = () => {
  const { email, setEmail, submit, status } = useButtonDown({});
  const inputRef = useRef() as RefObject<HTMLInputElement>;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  useEffect(() => {
    if (status === "subscribed" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [status]);

  return (
    <div className="w-full flex-col justify-around py-6 mt-10 items-center dark:bg-dp01 rounded-lg mb-10 flex">
      <div className="text-center">
        <h3 className="text-3xl">Want to know when I post a new article?</h3>
        <p className="text-xl">Sign up for my newsletter to stay up to date.</p>
      </div>
      <form
        className="mt-6 w-10/12 rounded-lg flex justify-center bg-dp24 shadow-dp24"
        onSubmit={onSubmit}
      >
        <input
          type="email"
          ref={inputRef}
          placeholder="mihirgupta0900@gmail.com"
          className="rounded-md py-2 px-4 mr-4 w-full bg-transparent"
          value={email}
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
        <button className="bg-accent text-gray-900 px-4 my-2 py-1 mr-2 rounded-md font-medium  flex justify-center items-center h-10">
          {status === "subscribing" ? <LoadingSpinner /> : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
