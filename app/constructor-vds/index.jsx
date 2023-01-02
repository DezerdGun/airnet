import Calculator from "../../components/calculator";
import st from "./constructorVds.module.scss";

export default function ConstructorVds({ language }) {
	return (
		<div className={st.constructorVds}>
			<Calculator />
		</div>
	);
}
