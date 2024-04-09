import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import Section_container from "../../Components/Section_container/Section_container";
export default function ResetPassword() {
  let { setIsUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  async function resetNewPassword(values) {
    try {
      setLoading(true);
      let { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,
        values
      );
      // check data success
      if (data) {
        setIsUser(data.token);
        // save token in local storage to save it when reload page
        localStorage.setItem("userToken", data.token);
        // navigate To Home
        navigate("/");
        setLoading(false);
        setMsg(""); //Account Already Exists
      }
    } catch (error) {
      setMsg(error.response.data.message); // There is no user registered with this email address
      setLoading(false);
    }
  }

  // validation form
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    newPassword: Yup.string()
      .required("password is required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password not valid"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema,
    onSubmit: resetNewPassword,
  });

  return (
    <>
      <Section_container>
        <div className="h-fit">
          <div className="w-full md:w-1/2 mx-auto py-10  bg-white">
            <h1 className="text-cyan-700 font-bold text-2xl mb-3">
              reset your account password{" "}
            </h1>
            <form className="bg-white" onSubmit={formik.handleSubmit}>
              {msg ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-2xl text-red-700">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <p> {msg} </p>
                </div>
              ) : (
                ""
              )}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.email} </p>
                </div>
              ) : (
                ""
              )}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="password"
                  placeholder="New Password"
                  id="newPassword"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.newPassword && formik.touched.newPassword ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.newPassword} </p>
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className={`block w-full bg-cyan-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer`}
                disabled={!(formik.isValid && formik.dirty)}
              >
                {loading ? (
                  <Oval
                    visible={true}
                    height="25"
                    color="#8ae689"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="text-center mx-auto w-[50px]"
                  />
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          </div>
        </div>
      </Section_container>
    </>
  );
}
