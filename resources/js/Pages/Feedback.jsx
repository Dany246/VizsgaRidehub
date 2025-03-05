import Navbar from "@/Components/Navbar";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

import { Head } from "@inertiajs/react";

const StarRating = ({ auth }, { totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState([]);
    const user = usePage().props.auth.user;

    const handleSubmit = () => {
        const newReview = {
            rating,
            comment: comment.trim() === "" ? "" : comment,
            id: Date.now(),
        };

        setReviews([...reviews, newReview]);
        setComment("");
        setRating(0);
    };

    return (
        <>
            <Navbar auth={auth} />
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-xl font-bold text-center">
                    Ratings & Comments
                </h2>

                {/* Csillagos értékelés */}
                <div className="flex justify-center my-4">
                    {[...Array(totalStars)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <span
                                key={index}
                                onClick={() => setRating(starValue)}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(0)}
                                className={`cursor-pointer text-3xl transition-transform duration-200 ${
                                    hover >= starValue || rating >= starValue
                                        ? "text-yellow-400 scale-110"
                                        : "text-gray-400"
                                }`}
                            >
                                ★
                            </span>
                        );
                    })}
                </div>

                {/* Komment beviteli mező */}
                <textarea
                    className="w-full p-2 border border-orange-400 focus:border-orange-600 rounded-md resize-none text-black focus:ring-0"
                    rows="3"
                    placeholder="Share your experience..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>

                {/* Beküldés gomb */}
                <button
                    className="mt-2 w-full bg-orange-400 text-black py-2 rounded-md hover:bg-orange-600 transition"
                    onClick={handleSubmit}
                >
                    Submit
                </button>

                {/* Megjelenített kommentek */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Ratings:</h3>
                    {reviews.length === 0 ? (
                        <p className="text-orange-500">No ratings yet.</p>
                    ) : (
                        reviews.map((review) => (
                            <div key={review.id} className="p-3 border-b">
                                <p>{user.name}</p>
                                <div className="text-yellow-400">
                                    {"★".repeat(review.rating) +
                                        "☆".repeat(totalStars - review.rating)}
                                </div>
                                <p className="mt-1">
                                    {review.comment ? review.comment : ""}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default StarRating;
