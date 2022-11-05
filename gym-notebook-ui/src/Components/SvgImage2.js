import * as React from "react";
import Svg, {G, Path, Defs, ClipPath} from "react-native-svg";

const SvgComponent = (props) => (
	<Svg width={412} height={761} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
		<G clipPath="url(#a)">
			<Path fill="#423F3B" d="M.661.083h411v760h-411z" />
			<Path
				d="M-48.05-4.237S142.88 78.918 136.98 203.527c-5.902 124.609-32.229 164.286-15.705 240.035 23.172 106.224 119.275 254.272 119.275 254.272S95.078 606.345 74.996 495.181c-13.228-73.224-6.662-186.362 0-291.654C81.659 98.236-48.05-4.237-48.05-4.237Z"
				fill="#525266"
			/>
			<Path
				d="M462.421 7.226s-192.54 78.437-189.122 203.16c3.417 124.724 28.947 165.04 10.918 240.363-25.283 105.628-124.312 251.275-124.312 251.275s147.259-87.888 169.551-198.53c14.683-72.881 10.373-186.152 5.81-291.582S462.421 7.226 462.421 7.226Z"
				fill="#729676"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M233.677 582.635c.427-1.093 1.333-2.267 1.974-2.507.293-.133.64-.24.773-.24.293-.026.24.454-.08.64-.133.08-.267.267-.267.4 0 .32 1.227.16 1.68-.213.214-.187.454-.24.534-.133.373.373.16.906-.48 1.147-.854.32-.907.906-.054.666.321-.106 1.414-.533 2.454-.96 2.054-.853 2.881-.933 3.867-.373.374.213 1.094.373 1.627.4.534 0 1.334.187 1.734.4.426.213 1.067.4 1.44.4 1.013 0 3.28 1.147 4.534 2.32 1.173 1.04 4.267 4.641 5.227 6.081.294.427.88 1.574 1.28 2.534.907 2.133 1.761 3.28 3.121 4.187.587.373 1.04.907 1.04 1.173 0 .987 3.2 2.534 6.614 3.174.827.16 4.187.4 7.415.534 6.214.266 8.481.586 12.695 1.867 7.414 2.293 12.295 6.027 14.775 11.388.907 1.973 1.6 2.933 3.227 4.694 3.36 3.573 4.427 6.427 4.881 12.988.666 9.761.906 11.442 2.773 20.403 1.12 5.414 1.494 8.641 1.494 12.882 0 4.587-2.267 27.176-2.801 28.083-.16.24-8.667.347-8.667.107 0-.08.533-1.894 1.2-4.001 1.173-3.787 1.2-3.973 1.253-7.814.054-3.867.027-3.974-.933-6.988-1.707-5.254-2.24-7.707-2.694-12.268-.507-5.041-1.2-9.041-1.52-8.481-.107.187-.507 2.56-.907 5.281-.56 3.627-.773 6.347-.88 10.268-.107 4.747-.027 5.84.587 10.001.373 2.56.88 6.454 1.093 8.641.24 2.187.534 4.187.694 4.454.133.267.24.587.24.747 0 .213-7.975.293-26.697.293-21.763 0-26.67-.053-26.564-.346.08-.187.4-1.307.72-2.454 1.201-4.267 4.028-11.922 4.934-13.282 1.521-2.32 1.867-4.774.827-6.134-1.413-1.894-1.493-3.707-.4-8.028.587-2.293.587-3.387-.053-6.907-.214-1.201-.48-2.054-.667-2.054-.187 0-.853-.613-1.52-1.333-.667-.747-1.254-1.334-1.307-1.334-.053 0-.053.747 0 1.654.267 4.64-2.294 10.188-7.041 15.175-1.387 1.467-2.16 2.587-2.854 4.08-1.307 2.774-2.16 3.788-5.174 6.081-3.92 2.987-4.16 3.067-5.707 1.974-.507-.374-1.6-1.12-2.454-1.68-7.601-5.014-10.321-7.921-16.642-17.869l8.294-4.961s.934.32 1.414.347c.453 0 1.894.373 3.2.826 2.316.813 3.038 1.088 3.386.839.177-.127.258-.389.402-.785.186-.56.32-1.44.266-1.947-.426-4.774.347-7.494 2.747-9.628l1.36-1.227.241-3.414c.586-9.414.906-10.534 4.053-13.548 1.201-1.147 2.854-2.587 3.708-3.174 1.706-1.147 3.547-3.68 3.253-4.427-.133-.347-.293-.267-.933.427-.854.96-1.6 1.093-2.187.373-.213-.24-.907-1.414-1.52-2.587-1.601-2.987-1.681-3.067-3.547-3.067-1.227 0-1.867-.16-2.774-.694-.64-.373-1.254-.826-1.387-1.013-.187-.267-2.32-1.76-2.56-1.76-.054 0-.24.346-.427.8-.187.427-.507.8-.72.8-.534 0-1.707.827-1.52 1.093.08.134.026.24-.134.24-.133 0-.32-.16-.373-.346-.107-.214-.16-.187-.16.08-.027.24-.267.426-.533.453-.454.027-.534-.187-.694-1.733-.267-2.721-.4-3.254-.88-3.254-.347 0-.347-.08.107-.427.48-.373.4-.4-.8-.24l-1.307.187.426-.694c.587-.88.587-1.253 0-1.04-.373.133-.4.08-.186-.16.186-.213.24-.667.106-1.253-.133-.534-.106-.987.054-1.067.133-.08.106-.294-.08-.534-.16-.213-.294-.88-.267-1.493.053-.64.053-1.36.053-1.6 0-.267.107-.534.214-.614.24-.133-.267-2-.56-2-.107 0-.24.267-.294.587-.08.426-.133.346-.16-.267 0-.48.08-1.093.24-1.36.134-.267.267-1.414.294-2.561.08-2.32.426-2.933 2.773-4.987.667-.587 1.201-1.28 1.201-1.547 0-.88.293-1.28.826-1.147.4.107.64-.133 1.147-1.28.56-1.227.854-1.52.72-.693-.026.133.107.187.294.133.32-.106.373-.266.453-1.333 0-.24.267-.534.56-.614.613-.186.667-.853.133-1.573-.586-.774-.48-1.04.187-.587.854.613 1.254.533 1.547-.267Z"
				fill="#F66"
			/>
		</G>
		<Defs>
			<ClipPath id="a">
				<Path fill="#fff" transform="translate(.661 .083)" d="M0 0h411v760H0z" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default SvgComponent;
