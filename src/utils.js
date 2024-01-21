import {redirect} from 'react-router-dom';



export async function requireAuth() {
    const token = localStorage.getItem("email");
    console.log(token);
    if (!token) {
      throw redirect("/login");
    }
  }
