import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
	try {
		const videos = await Video.find({});
		res.render("home", { pageTitle: "home", videos });
	} catch (error) {
		console.log(error);
		res.render("home", { pageTitle: "home", videos: [] });
	}
};

export const search = (req, res) => {
	//const searchingBy = req.query.term;
	const {
		query: { term: searchingBy }
	} = req;

	res.render("search", { pageTitle: "Search", searchingBy, videos });
};
export const getUpload = (req, res) =>
	res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
	const {
		body: { title, description },
		file: { path }
	} = req;

	const newVideo = await Video.create({
		fileUrl: path,
		title,
		description
	});
	console.log(newVideo);

	res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
	res.render("videoDetail", { pageTitle: "Delete Video" });

export const editVideo = (req, res) =>
	res.render("editVideo", { PageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
	res.render("deleteVideo", { PageTitle: "Delete Video" });
