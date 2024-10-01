import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/spongeBob.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoggedIn } from "../redux/slices/authSlice";
import toast from "react-hot-toast";
const NavBar = () => {
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const isInstructor = useSelector((state)=>state.Auth.isInstructor)

  function logOutHandler() {
    localStorage.clear()
    dispatch(setLoggedIn(false));
    navigate("/", { replace: true });
    toast.success("Logged Out")
    window.location.reload();
   
   
  }

  return (
    <div className="flex justify-center gap-5 mx-14 p-4 flex-wrap xl:justify-between xl:gap-0 ">
      <Link to={"/"}><h1  className="text-3xl font-bold">Quizzy</h1></Link>
      {!isLoggedIn ? (
        <div className="flex gap-2 ">
          <Link to={"/login"}>
            <Button buttonText={`Login`} />
          </Link>
          <Link to={"/signup"}>
          <Button buttonText={`SignUp`} />
          </Link>
         
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {location.pathname.includes("quiz")
            ? isInstructor && (
                <Link to={"addQuestion"} replace>
                  <Button buttonText={"AddQuestions"} />
                </Link>
              )
            : isInstructor && (
                <Link to={"addTopic"}>
                  <Button buttonText={"Add Topic"} />
                </Link>
              )}

          <Button clickHandler={logOutHandler} buttonText={"LogOut"} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
