import { useNavigate, useParams } from "react-router-dom";

export const useCounterId = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	if (!id) {
		navigate("/");
		return "";
	}

	return id;
};
