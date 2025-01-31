import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORT_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLang = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="px-8 py-2 bg-gradient-to-b from-black absolute top-0 left-0 w-full z-10 flex justify-between items-center">
        <img className="w-44" src={LOGO} alt="Netflix Logo" />

        {user ? (
          <div className="flex gap-5 text-sm text-white">
            {showLang && (
              <select
                className="text-black px-2"
                onChange={handleLanguageChange}
              >
                {SUPPORT_LANGUAGES.map((lang) => (
                  <option value={lang.identifier} key={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-purple-400 text-white px-3"
              onClick={handleGptSearchClick}
            >
              {showLang ? "Home" : "GPT Search"}
            </button>
            <div>{user?.displayName}</div>
            <button
              className="bg-red-500 text-white px-2 py-1 hover:bg-red-700"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
