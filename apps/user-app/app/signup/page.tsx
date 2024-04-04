import SignUpForm from "../../components/SignUpForm";

export default function () {
  return (
    <div className="z-10 flex w-full h-screen bg-slate-200 absolute top-0 left-0 justify-center items-center ">
      <div className="p-10 bg-slate-100 rounded-lg flex-col items-center flex">
        <div className="heading mb-5">Sign Up</div>
        <SignUpForm />
      </div>
    </div>
  );
}
