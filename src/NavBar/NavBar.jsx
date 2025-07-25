import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import CurrancyDropDown from "./CurrancyDropDown/CurrancyDropDown";
import Context from "../UseContext/Context.js";
import { useNavigate } from "react-router-dom";
import MiniCart from "./MiniCart/MiniCart";

const NavBar = () => {
	const setData = useContext(Context).setData;
	const navigate = useNavigate();
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_left}>
				<NavLink
					className={({ isActive }) => (isActive ? styles.active : "")}
					to="/women"
					end={false}
				>
					WOMEN
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? styles.active : "")}
					to="/men"
				>
					MEN
				</NavLink>
				<NavLink
					className={({ isActive }) => (isActive ? styles.active : "")}
					to="/kids"
				>
					KIDS
				</NavLink>
			</div>
			<div className={styles.navbar_logo}>
				<NavLink to="/women">
					<div>
						<svg
							width="41"
							height="41"
							viewBox="0 0 41 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_3857_308)">
								<path
									d="M34.0222 28.6646C34.0494 28.983 33.8009 29.2566 33.4846 29.2566H7.46924C7.15373 29.2566 6.90553 28.9843 6.93156 28.6665L8.7959 5.91227C8.8191 5.62962 9.05287 5.41211 9.33372 5.41211H31.5426C31.8226 5.41211 32.0561 5.62853 32.0801 5.91036L34.0222 28.6646Z"
									fill="#1DCF65"
								/>
								<path
									d="M36.0989 34.6014C36.1314 34.9985 35.8212 35.339 35.4269 35.339H5.5945C5.20103 35.339 4.89104 35.0002 4.9222 34.6037L7.06388 7.34718C7.0918 6.9927 7.38438 6.71973 7.73618 6.71973H33.1959C33.5469 6.71973 33.8392 6.99161 33.8681 7.34499L36.0989 34.6014Z"
									fill="url(#paint0_linear_3857_308)"
								/>
								<path
									d="M19.9232 26.6953C16.0402 26.6953 12.8813 22.8631 12.8813 18.1528C12.8813 17.9075 13.0782 17.7085 13.3211 17.7085C13.564 17.7085 13.7608 17.9073 13.7608 18.1528C13.7608 22.3732 16.5253 25.8067 19.9234 25.8067C23.3214 25.8067 26.0859 22.3732 26.0859 18.1528C26.0859 17.9075 26.2827 17.7085 26.5257 17.7085C26.7686 17.7085 26.9654 17.9073 26.9654 18.1528C26.9653 22.8631 23.8062 26.6953 19.9232 26.6953Z"
									fill="white"
								/>
								<path
									d="M24.258 18.0337C24.1455 18.0337 24.033 17.9904 23.947 17.9036C23.7753 17.7301 23.7753 17.4488 23.947 17.2753L26.2259 14.9729C26.3083 14.8897 26.4201 14.8428 26.5368 14.8428C26.6535 14.8428 26.7653 14.8895 26.8477 14.9729L29.1043 17.2529C29.2761 17.4264 29.2761 17.7077 29.1043 17.8812C28.9326 18.0546 28.6542 18.0547 28.4825 17.8812L26.5367 15.9155L24.5689 17.9036C24.483 17.9904 24.3705 18.0337 24.258 18.0337Z"
									fill="white"
								/>
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_3857_308"
									x1="29.8734"
									y1="31.3337"
									x2="11.5134"
									y2="9.9008"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#52D67A" />
									<stop offset="1" stopColor="#5AEE87" />
								</linearGradient>
								<clipPath id="clip0_3857_308">
									<rect
										width="31.16"
										height="30.176"
										fill="white"
										transform="translate(4.92004 5.41211)"
									/>
								</clipPath>
							</defs>
						</svg>
					</div>
				</NavLink>
			</div>
			<div className={styles.navbar_right}>
				<div>
					<CurrancyDropDown setData={setData} />
				</div>
				<div>
					<MiniCart />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
