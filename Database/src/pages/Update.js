import { useEffect, useState } from "react";
import { supabase } from "../Supabase/supaClient";
import { useParams, useNavigate } from "react-router-dom";
const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !method || !rating) {
      setFormError("Please fill all the field correctly");
      return;
    }

    const { data, error } = await supabase
      .from("smoothiesTime")
      .update({ Title: title, Method: method, Ratings: rating })
      .eq("id", id);

    if (error) {
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      setFormError(null);
      navigate("/");
    }
  };
  useEffect(() => {
    const fetchSmootie = async () => {
      const { data, error } = await supabase
        .from("smoothiesTime")
        .select()
        .eq("id", id)
        .single();
      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
      }
    };

    fetchSmootie();
  }, [id, navigate]);
  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="method">Method:</label>
        <textarea
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <button>Update Smoothie Recipe</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
