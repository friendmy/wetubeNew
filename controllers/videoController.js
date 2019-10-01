import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
	const videos = await Video.find({});
	res.render("home", { pageTitle: "home", videos });
};

export const search = (req, res) => {
	//const searchingBy = req.query.term;
	const {
		query: { term: searchingBy }
	} = req;

	res.render("search", { pageTitle: "Search", searchingBy });
};
export const upload = (req, res) => res.render("upload");

export const videoDetail = (req, res) => res.render("videoDetail");

export const editVideo = (req, res) => res.render("editVideo");

export const deleteVideo = (req, res) => res.render("deleteVideo");
