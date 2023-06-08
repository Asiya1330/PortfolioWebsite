
import { Rev, GameWeb, LSM, Crypto, Ecomm, LMS, TookSpot,DSHTML, DSPDF } from './projectsImages'

export const projectsData = [
	{
		id: 1,
		title: 'MedoSync',
		shortDesc: "lorem ipsum dolor sit impyg",
		categories: ['Web Application', 'UI/UX Design'],
		img: Rev,
		link: "https://www.medosync.com/",
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		projectDetailImages: [],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		link: "https://playerange.com/",
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		title: 'PlayeRange',
		shortDesc: "lorem ipsum dolor sit impyg",

		categories: ['Web Application'],
		img: GameWeb,
	},
	{
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		id: 3,
		link: "https://www.tookspot.com/",

		title: 'TookSpot',
		categories: ['Web Application'],
		shortDesc: "lorem ipsum dolor sit impyg",

		img: TookSpot,
	},
	{
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		id: 4,
		link: "https://relaxed-williams-a66d2d.netlify.app/",

		title: 'uGaenn',
		categories: ['Web Application'],
		shortDesc: "lorem ipsum dolor sit impyg",

		img: Crypto,
	},
	{
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		id: 5,
		link: "https://lsm.com.pk/#/tabs/home",

		title: 'LSM',
		categories: ['Mobile Application','UI/UX Design', 'Web Application'],
		shortDesc: "lorem ipsum dolor sit impyg",

		img: LSM,
	},
	{
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		id: 6,
		link: "https://theonlineschool.uk/",

		title: 'The Online School',
		categories: ['Web Application'],
		shortDesc: "lorem ipsum dolor sit impyg",

		img: LMS,
	},
	{
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'Vue.js',
			'TailwindCSS',
			'AdobeXD',
		],
		id: 7,
		link: "https://aleraaj.com/",
		title: 'Al Eraaj',
		categories: ['Web Application'],
		shortDesc: "lorem ipsum dolor sit impyg",


		img: Ecomm,
	},
	{
		id: 8,
		link: "/files/Impact-of-Promotion-on-Sales.html",
		title: 'Impact of Promotion on sales',
		categories: ['Data Science'],
		shortDesc: "lorem ipsum dolor sit impyg",
		description: "The objective of the project was to analyze the impact of promotion campaigns on sales by utilizing time series analysis techniques on the transaction and promotion datasets. The main steps involved building time series counterfactual models using SARIMA, ARIMA, and XGBoost algorithms and comparing the predicted trends with the actual units sold. This analysis aimed to assess the effectiveness of the promotion campaigns and understand their impact on sales. Overall, this project aimed to leverage time series analysis techniques to explore the relationship between promotion campaigns and sales, enabling data-driven insights and informed decision-making for optimizing promotional strategies.",
		project_solution: `
			<p>
			The project involved several steps to fulfill the requirements of analyzing the impact of promotion campaigns on sales through time series analysis. Here is an improved description of the steps conducted:
			<p>
			<br />
			<h3>Data Cleaning and Data Preparation:</h3><p>
			The initial focus was on cleaning and preparing the transaction and promotion datasets. This involved handling missing values, addressing inconsistencies, and ensuring data quality. Additionally, the datasets were merged and aligned based on common identifiers such as dates or item IDs.
			</p>
			<h3>Exploratory Data Analysis:</h3><p> Exploratory data analysis was performed to gain a better understanding of the datasets. This step included visualizations, summary statistics, and identifying any patterns or anomalies in the data.
			</p>
			<h3>Handling Outliers:</h3> <p>Outliers in the data were identified and treated appropriately. Outliers can significantly impact the analysis and forecasting models, so it was important to address them to ensure accurate results.
			</p>
			<h3>Data Scaling and Standardization:</h3><p> To facilitate meaningful comparisons and improve model performance, the data was scaled or standardized if required. This step ensured that different variables were on a similar scale, preventing bias towards specific features.
			</p>
			<h3>Correlation Analysis:</h3><p> The correlation between the promotion campaigns and sales was examined to assess the relationship between the variables. This analysis provided insights into the strength and direction of the association.
			</p>
			<h3>Feature Engineering: </h3><p>Additional features were created or transformed based on domain knowledge or insights gained from the data. Feature engineering aimed to capture relevant information that could enhance the forecasting models and improve their accuracy.
			</p>
			<h3>Time Series Analysis:</h3><p> Time series analysis techniques, specifically SARIMA, ARIMA, and XGBoost models, were applied to the preprocessed data. These models consider the data's temporal nature and capture the underlying patterns, trends, and seasonality.
			</p>
			<h3>Data Splitting and Model Fitting:</h3><p>  The preprocessed data were split into training and testing sets. The SARIMA, ARIMA, and XGBoost were then fitted to the training data to learn the patterns and make predictions. The models were tuned and validated to ensure optimal performance.
			</p>
			<h3>Model Evaluation: </h3><p> The performance of the SARIMA, ARIMA, and XGBoost was evaluated using appropriate evaluation metrics such as mean squared error (MSE), root mean squared error (RMSE), or mean absolute error (MAE). These metrics quantified the accuracy of the model's predictions.
			</p>
			<h3>Impact of Promotion: </h3><p> The counterfactual model trends from SARIMA, ARIMA, and XGBoost were compared with the actual sales data to assess the effect of the promotion campaigns. Any deviations or changes in sales trends associated with the promotion periods were analyzed to evaluate the effectiveness of the campaigns.
			</p>
			<h3>Future Work: </h3><p> Suggestions for future work or areas of improvement were identified based on the analysis conducted. These recommendations could include further exploring different forecasting models, refining feature engineering techniques, or incorporating additional external factors that may influence sales.
			</p>
			<p>By following these steps, the project aimed to provide insights into the impact of promotion campaigns on sales and enable data-driven decision-making for optimizing promotional strategies.
		`,
		technologies: [
			'Machine leaning',
			'regression learning',
			'AI',
			'Data analysis'
		],

		img: DSHTML,
	},
	{
		id: 9,
		title: 'Increase Sales for mailing compaign',
		link: "/files/R-Notebook.pdf",
		categories: ['Data Science'],
		shortDesc: "lorem ipsum dolor sit impyg",
		description: "The Marketing department of Adventure Works Cycles wants to increase sales by targeting specific customers for a mailing campaign. The company's database contains a list of past customers and a list of potential new customers. By investigating the attributes of previous customers, the company hopes to discover patterns that they can then apply to potential customers. For example, they might use past trends to predict which potential customers are most likely to purchase a bike from Adventure Works Cycles or create customer segments for future marketing campaigns.",
		evaluation_measures: ["Accuracy", "Confusion Matrix (Precision, Recall, F1-Score)", "ROC", "AUC"],
		model_training_steps: [
			"Data Cleaning",
			"Descriptive Statistics",
			"Exploratory Data Analysis",
			"One Hot Encoding",
			"Correlation Analysis",
			"Feature Importance",
			"Feature Elimination",
			"Data Scaling",
			"Test-Train Split"
		],
		project_solution: "<h1>Project Solution</h1><p>The project solution intended to perform supervised classification using three of the following models: Logistic Regression, Decision Trees, CART<p>",
		technologies: [
			'Machine learning',
			'regression learning',
			'AI',
			'Data analysis'
		],
		img: DSPDF,
	},
];
