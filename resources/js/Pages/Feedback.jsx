import Navbar from "@/Components/Navbar";
import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

const StarRating = ({ auth, feedbacks }) => {
    const [hover, setHover] = useState(0);

    const { data, setData, post, error, processing } = useForm({
        rating: 0,
        comment: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("feedback.store"));
    }

    return (
        <>
            <Head title="RideHub" />
            <Navbar auth={auth} />
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-xl font-bold text-center">Ratings & Comments</h2>

                {/* Csillagos értékelés */}
                <div className="flex justify-center gap-2 my-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            onClick={() => setData("rating", star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            style={{
                                fontSize: "30px",
                                cursor: "pointer",
                                color: star <= (hover || data.rating) ? "gold" : "gray",
                            }}
                        >
                            ★
                        </span>
                    ))}
                </div>

                {/* Komment beviteli mező */}
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-2 border border-orange-400 focus:border-orange-600 rounded-md resize-none text-black focus:ring-0"
                        rows="3"
                        placeholder="Share your experience..."
                        value={data.comment}
                        onChange={(e) => setData('comment', e.target.value)}
                    ></textarea>

                    {/* Beküldés gomb */}
                    <button
                        className="mt-2 w-full bg-orange-400 text-black py-2 rounded-md hover:bg-orange-600 transition"
                        onClick={handleSubmit}
                        disabled={processing}
                    >
                        {processing ? "Submitting..." : "Submit"}
                    </button>
                </form>

                {/* Megjelenített kommentek */}
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Ratings:</h3>
                    {feedbacks && feedbacks.length === 0 ? (
                        <p className="text-orange-500">No ratings yet.</p>
                    ) : (
                        feedbacks.map((feedback) => (
                            <div key={feedback.id} className="p-3 border-b">
                                <p><strong>{feedback.user?.name || "Anonymous"}</strong></p>
                                <div className="text-yellow-400">
                                    {"★".repeat(feedback.rating) + "☆".repeat(5 - feedback.rating)}
                                </div>
                                <p className="mt-1">{feedback.comment}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default StarRating;
