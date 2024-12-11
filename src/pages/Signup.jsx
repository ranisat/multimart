import React, { useState } from "react";
import Helment from "../components/Helmet/Helment";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { storage } from "../firebase-config";
import { toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // update profile
            updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            // store user data in firebase database

            await setDoc(doc(db, "users", user.uid),{
              uid:user.uid,
              displayName:username,
              email,
              photoURL:downloadURL,
            })
          });
        }
      );
      setLoading(false);
       toast.success('Account created')
       navigate('/login')
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  return (
    <Helment title="signup">
      <section className="py-10 relative bg-gray-200">
        <div className="container py-10 mx-auto">
       {
        loading ? (<h2 className="text-center h4">Loading...</h2>)
        :    <div className="p-4 bg-s1 w-1/2 mx-auto mt-10 rounded-md">
            <form action="" className="w-full py-4 px-4" onSubmit={signup}>
              <h4 className="mb-8 text-center h4">Sign Up</h4>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 w-full rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-2">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  className=" w-full rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-6 text-right">
                <p className="text-[12px]">
                  {" "}
                  Already have an account?{" "}
                  <Link to="/login" className="text-p1 font-medium">
                    Login
                  </Link>
                </p>
              </div>
              <div className="mb-6 mt-3 text-center">
                <button type="submit" className="main-btn">
                  Create an Account
                </button>
              </div>
            </form>
          </div>
       }
        </div>
      </section>
    </Helment>
  );
};

export default Signup;
