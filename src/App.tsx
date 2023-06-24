import Gatere from "./assets/gateremark.jpg";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import {
	TbNotebook,
	TbWorld,
	TbUser,
	TbBrandGithub,
	TbStack2,
	TbShare2,
	TbNotes,
} from "react-icons/tb";

function App() {
	return (
		<div className="flex flex-col justify-center items-center m-12">
			<img className=" h-28 rounded-full" src={Gatere} alt="gateremark" />
			<p className=" text-[#fff] my-3 text-xl font-bold">@gateremark</p>
			<p className=" text-[#fff] text-lg">
				| MERN Stack | Machine Learning | #foreverlearner
			</p>
			<div className="flex text-[#fff] text-3xl gap-5 my-7 justify-center items-center">
				<a className="hover:scale-110 transition duration-150" href="">
					{" "}
					<SlSocialLinkedin />{" "}
				</a>
				<a className="hover:scale-110 transition duration-150" href="">
					{" "}
					<SlSocialTwitter />{" "}
				</a>
			</div>
			<div className="text-[#BDBDBD] flex flex-col gap-5 md:w-[55%] w-full items-center justify-center">
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://github.com/gateremark"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbBrandGithub className=" text-[35px]" />
						<p className="p-5">GitHub</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://dev.to/gateremark"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbStack2 className=" text-[35px]" />
						<p className="p-5">Dev.to</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://hashnode.com/@gateremark"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbNotebook className=" text-[35px]" />
						<p className="p-5">Hashnode</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://gateremark.medium.com/"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbNotes className=" text-[35px]" />
						<p className="p-5">Medium</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://gateremark.vercel.app/"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbWorld className=" text-[35px]" />
						<p className="p-5">My Portfolio</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
				<a
					className=" w-full text-center bg-[#525151] rounded-[30px] hover:scale-[102%] transition duration-300"
					href="https://drive.google.com/file/d/12AMcf0bl-dEfxma2KrAEli19FSRjwOKi/view?usp=drive_link"
					target="_blank"
				>
					<div className="flex justify-between items-center ml-2 mr-4">
						<TbUser className=" text-[35px]" />
						<p className="p-5">My Résumé</p>
						<TbShare2
							className=" text-[40px] hover:bg-[#5F5E5E] transition ease-in-out duration-300 rounded-full p-2"
							title="Copy Link"
						/>
					</div>
				</a>
			</div>
		</div>
	);
}

export default App;