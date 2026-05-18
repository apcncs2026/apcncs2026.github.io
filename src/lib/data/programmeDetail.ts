// Detailed programme content parsed from design/Programme.docx.
// Used by /programme/10-june, /programme/11-june, /programme/12-june.

export interface Panelist {
	name: string;
	note?: string; // e.g. "TBC"
}

export interface Talk {
	time: string;
	prefix?: string; // "Opening Address", "Advances in Complex Systems Invited Lecture", etc.
	speaker?: string; // "Marton Karsai (Central European University, Austria)"
	title?: string; // talk title; "TBC" allowed
	// Panel-discussion fields (optional)
	panelTitle?: string;
	panelists?: Panelist[];
	moderator?: string;
}

export interface InvitedSession {
	kind: 'invited';
	number: number;
	time: string;
	location: string;
	chair?: string;
	talks: Talk[];
}

export interface ParallelTrack {
	name: string;
	location: string;
	chair?: string;
	talks: Talk[];
	tba?: boolean; // true when track details are not yet available
}

export interface ParallelSession {
	kind: 'parallel';
	number: number;
	time: string;
	tracks: ParallelTrack[];
}

export interface BlockItem {
	kind: 'registration' | 'break' | 'note';
	time: string;
	title: string;
	location?: string;
}

export type DayItem = InvitedSession | ParallelSession | BlockItem;

export interface DayDetail {
	slug: '10-june' | '11-june' | '12-june';
	label: string; // weekday
	shortLabel: string;
	date: string; // "10 June 2026"
	subtitle: string;
	items: DayItem[];
}

export const dayDetails: DayDetail[] = [
	// =====================================================================
	{
		slug: '10-june',
		label: 'Wednesday',
		shortLabel: 'Wed',
		date: '10 June 2026',
		subtitle: 'Conference Day 1',
		items: [
			{ kind: 'registration', time: '08:00 onwards', title: 'Registration', location: 'MAS Atrium' },
			{
				kind: 'invited',
				number: 1,
				time: '08:35 – 10:30',
				location: 'SPMS-LT1',
				chair: 'Siew Ann Cheong (NTU, Singapore)',
				talks: [
					{ time: '08:35 – 08:45', prefix: 'Opening Address', speaker: 'Siew Ann Cheong (NTU, Singapore)' },
					{
						time: '08:45 – 09:20',
						prefix: 'Advances in Complex Systems Invited Lecture',
						speaker: 'Marton Karsai (Central European University, Austria)',
						title: 'Socioeconomic Networks, Segregation Patterns and Their Dynamics'
					},
					{ time: '09:20 – 10:05', speaker: 'Misako Takayasu (Institute of Science Tokyo, Japan)', title: 'Modeling the Gut Microbiome Ecosystem Based on a Random Multiplicative Process' },
					{
						time: '10:05 – 10:30',
						prefix: 'Panel Discussion 1',
						panelTitle: 'How to Do Impactful Research?',
						panelists: [
							{ name: 'Ginestra Bianconi (Queen Mary University of London, UK)' },
							{ name: 'Marton Karsai (Central European University, Austria)' },
							{ name: 'Hawoong Jeong (KAIST, Korea)', note: 'TBC' }
						],
						moderator: 'Siew Ann Cheong (NTU, Singapore)'
					}
				]
			},
			{ kind: 'break', time: '10:30 – 11:00', title: 'Coffee Break', location: 'MAS Atrium' },
			{
				kind: 'parallel',
				number: 1,
				time: '11:00 – 12:30',
				tracks: [
					{
						name: 'Economic and Financial Complexity I',
						location: 'SPMS-LT1',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Marta Zava (Bocconi University, Italy)', title: 'Network Motifs and the Rise of Entrepreneurial Ecosystems' },
							{ time: '11:15 – 11:30', speaker: 'Galvin Ng (CSH Vienna, Austria), Damien Bertrand (EPFL, Switzerland), Luca Mungo (University of Oxford, UK), and François Lafond (University of Oxford, UK)', title: 'Synthetic Supply Networks' },
							{ time: '11:30 – 11:45', speaker: 'Imran Ansari, Shashi Jain, Srikant Iyer (IISc Bangalore, India)', title: 'Network-Based Portfolio Optimization from Denoised Financial Correlation Matrices' },
							{ time: '11:45 – 12:00', speaker: 'Pawanesh (OP Jindal Global University, India), Charu Sharma and Niteesh Sahni (Shiv Nadar Institute of Eminence, India)', title: 'Communicability Reveals Crisis-Specific Structural Reorganization in Financial Networks' },
							{ time: '12:00 – 12:15', speaker: 'Wei Ting Lim and Siew Ann Cheong (NTU, Singapore)', title: 'The Geometry of Panic: Multiscale Functional Analysis of Stock Market Dynamics' },
							{ time: '12:15 – 12:30', speaker: 'Haoting Xie and Siew Ann Cheong (NTU, Singapore)', title: 'Information Dynamics and Structural Transitions in Nikkei 225 Correlation Networks' }
						]
					},
					{
						name: 'Biological and Ecological Complexity I',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Mi Jin Lee (Pusan National University, Korea) and Deok-Sun Lee (KIAS, Korea)', title: 'Heterogeneous Popularity of Metabolic Reactions from Evolution' },
							{ time: '11:15 – 11:30', speaker: 'Felix V. Kohane, Guocheng Huang, Ihuan Gunawan, Daniel P. Neumann, John G. Lock (UNSW Sydney, Australia), Christine Chaffer (Garvan Institute for Medical Research, Australia)', title: 'Cell Molecular Signalling Dynamics, Including Noise, are Pre-Tuned by Cell Phenotypic State' },
							{ time: '11:30 – 11:45', speaker: 'Rahul Verma (Amity University, India)', title: 'Co-Mutation Based Genetic Networks to Infer Temporal Mutation Dynamics in Ancient Human Mitochondrial Genomes' },
							{ time: '11:45 – 12:00', speaker: 'Hon Lin Too, Farisan Dary, Isaac Si Yuan Ling, Dustin Erhard Theofilus, Ee Hou Yong (NTU, Singapore), Haiyi Liang (USTC, China)', title: 'Emergence of Hexanematic Order in a Growing Confluent Cell Monolayer' },
							{ time: '12:00 – 12:15', speaker: 'Antai Tao (USTC, China)', title: 'Bacterial Strategies for Navigating Surface Constraints' }
						]
					},
					{
						name: 'Dynamics on and of Complex Networks',
						location: 'SPMS-LT3',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Atiyab Zafar, Sanjay Jain (University of Delhi, India)', title: 'Rising Inequality and a ‘Power Shift’ from the Core to a Parasitic Periphery are Precursors of Collapse' },
							{ time: '11:15 – 11:30', speaker: 'Suwannachad Suwannajitt (Chulalongkorn University, Thailand)', title: 'Universal Stagnation Dynamics in Quantum Imaginary-Time Evolution' },
							{ time: '11:30 – 11:45', speaker: 'Eugene Tan (University of Western Australia, Australia)', title: 'Dimensions of Hypergraphs using Spreading Processes' },
							{ time: '11:45 – 12:00', speaker: 'Liyana Truna, Fatimah Abdul Razak, Roslinda Nazar (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Network-Based Characterization of Laminar Flow Using Complex Network Theory: A Data-Driven Analysis of Skin Friction and Heat Transfer' },
							{ time: '12:00 – 12:15', speaker: 'Charli Chinmayee Pal and Prasanta Kumar Mahapatra (Siksha ‘O’ Anusandhan, India)', title: 'Exact Prime Density Reproduced Through Resonant Tunneling across a Double Barrier System' },
							{ time: '12:15 – 12:30', speaker: 'Ram Pravesh Yadav, R.K. Brojen Singh, Anirban Chakraborti (Jawaharlal Nehru University, India), Hirdesh K. Pharasi (BML Munjal University, India)', title: 'Complex Dynamics of the Hindmarsh-Rose Neuron Model with Blue-Sky Catastrophe under a Magnetic Field and Noise' }
						]
					},
					{
						name: 'Focus Session on Complexity of AI',
						location: 'MAS Executive Classroom 1',
						tba: true,
						talks: []
					}
				]
			},
			{ kind: 'break', time: '12:30 – 13:30', title: 'Lunch Break', location: 'MAS Atrium' },
			{
				kind: 'invited',
				number: 2,
				time: '13:30 – 15:30',
				location: 'SPMS-LT1',
				talks: [
					{ time: '13:30 – 14:00', speaker: 'Lock Yue Chew (NTU, Singapore)', title: 'Dynamical scheduling and statistical physics of city-scale bus network with reinforcement learning' },
					{ time: '14:00 – 14:30', speaker: 'Sarah Russell (Peter MacCallum Cancer Centre & Swinburne University of Technology, Australia)', title: 'T cell development: Coordinated self-organisation at the level of the cell, the organ and the body' },
					{ time: '14:30 – 15:00', speaker: 'Thiparat Chotibut (Chulalongkorn University, Thailand)', title: 'Robust Sequence Recognition in Random Neuronal Networks' },
					{
						time: '15:00 – 15:30',
						prefix: 'Meet the Editor Session',
						speaker: 'Marton Karsai',
						title: 'Editor-in-Chief, World Scientific Advances in Complex Systems'
					}
				]
			},
			{ kind: 'break', time: '15:30 – 16:00', title: 'Coffee Break', location: 'MAS Atrium' },
			{
				kind: 'parallel',
				number: 2,
				time: '16:00 – 17:30',
				tracks: [
					{
						name: 'Economic and Financial Complexity II',
						location: 'SPMS-LT1',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Martin F. Diaz, Josep Perello, Miquel Montero (University of Barcelona, Spain)', title: 'Quantifying Adaptive Strategies in Regulated and Unregulated Simulated Housing Markets' },
							{ time: '16:15 – 16:30', speaker: 'Ardian Maulana, Hokky Situngkir (ITB, Indonesia)', title: 'Cascade Regimes and Corridor Backbones in Indonesia’s Production Network' },
							{ time: '16:30 – 16:45', speaker: 'Pradeep Moturi and Siew Ann Cheong (NTU, Singapore)', title: 'Spatio-Temporal Topological Data Analysis of Ethereum’s Transaction Data' },
							{ time: '16:45 – 17:00', speaker: 'Sudip Sarkar and Soumyajyoti Biswas (SRM University, India)', title: 'Large Earthquakes Follow Highly Unequal Ones' },
							{ time: '17:00 – 17:15', speaker: 'Einar C. Kjenstad (UiT The Arctic University of Norway, Norway), Peter Tsung-Wen Yen, Siew Ann Cheong (NTU, Singapore)', title: 'Estimating Parameter Heterogeneity in Decision Programs by Spatial Quasi-Differentiation (SQD)' }
						]
					},
					{
						name: 'Biological and Ecological Complexity II',
						location: 'SPMS-LT2',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Manya Khanna, Sudeep Shukla (Institute for Interdisciplinary Research, India), Abbinav Sankar Kailasam (University College London, UK), Ashok Kumar, Priya Gupta, Anirban Chakraborti (Jawaharlal Nehru University, India), Rajiba Lochan Sahoo, Amiya Ranjan Bhowmick (Institute of Chemical Technology, India), Sourish Das (Chennai Mathematical Institute, India)', title: 'Complex Dynamical Study of ESG Factors and Crop Price Volatility in India' },
							{ time: '16:15 – 16:30', speaker: 'Athokpam Langlen Chanu, Youngjai Park, Jong-Min Park (POSTECH, Korea), Jaesung Choi (KIAS, Korea), Younghwa Cha, Joon-Young Moon (Sungkyunkwan University, Korea), UnCheol Lee (University of Michigan Ann Arbor, USA)', title: 'Human Brain State Classification via Permutation Entropy of EEG Phase Dynamics' },
							{ time: '16:30 – 16:45', speaker: 'Soorya PP and Biswambhar Rakshit (Amrita School of Physical Sciences, India)', title: 'Emergence of Metastability in Spatially Embedded Neuronal Networks with Higher-Order Interactions' },
							{ time: '16:45 – 17:00', speaker: 'Mengna Liu, Antai Tao, Rongjing Zhang, Junhua Yuan (USTC, China)', title: 'Shear-Induced Oscillations and Hydrodynamic Buffering Stabilize Sperm Surface Navigation' }
						]
					},
					{
						name: 'Health System Complexity',
						location: 'SPMS-LT3',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Siti Najiha Md Asari, Fatimah Abdul Razak, Nazarudin Safian (Universiti Kebangsaan Malaysia, Malaysia), Mohd Rahim Sulong, Wan Ming Keong (Ministry of Health, Malaysia)', title: 'Comparing Dengue Transmission Network Complexity Between High-Density and Low-Density Districts in Malaysia' },
							{ time: '16:15 – 16:30', speaker: 'Saif Nasr, Inho Hong (Chonnam National University, Korea), Hyung Doo Kim (Hanyang University Churi Hospital, Korea)', title: 'Mapping the Network of Environmental Exposure Using Mixed Graphical Models' },
							{ time: '16:30 – 16:45', speaker: 'Adithi Kalyanaraman and R. K. Kapilavani (Sri Venkateswara College of Engineering, India)', title: 'Higher-Order Drug Interaction Hypergraphs with Hybrid Quantum Optimization for Parkinson’s Disease' },
							{ time: '16:45 – 17:00', speaker: 'Jesus Felix B. Valenzuela, Erika Fille T. Legara, Christopher P. Monterola (Asian Institute of Management, Philippines), Paula Joy Martinez (Center for AI Research, Philippines)', title: 'Emergence of Consensus Proceeds in Phases: Tracking Themes Across the Negotiations of the WHO Pandemic Agreement' },
							{ time: '17:00 – 17:15', speaker: 'Muhamad Aiman Hakim (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Early Warning Signals and Sentinel Nodes in Network Epidemics' }
						]
					},
					{
						name: 'Focus Session on Complexity of AI',
						location: 'MAS Executive Classroom 1',
						tba: true,
						talks: []
					}
				]
			}
		]
	},
	// =====================================================================
	{
		slug: '11-june',
		label: 'Thursday',
		shortLabel: 'Thu',
		date: '11 June 2026',
		subtitle: 'Conference Day 2',
		items: [
			{ kind: 'registration', time: '08:00 onwards', title: 'Registration', location: 'MAS Atrium' },
			{
				kind: 'invited',
				number: 3,
				time: '08:45 – 10:30',
				location: 'SPMS-LT1',
				chair: 'Anirban Chakraborti (Jawaharlal Nehru University, India)',
				talks: [
					{ time: '08:45 – 09:20', speaker: 'Ginestra Bianconi (Queen Mary University of London, UK)', title: 'TBC' },
					{ time: '09:20 – 10:05', speaker: 'Hawoong Jeong (KAIST, Korea)', title: 'Understanding Complex Systems via Network, Data, AI' },
					{
						time: '10:05 – 10:30',
						prefix: 'Panel Discussion 2',
						panelTitle: 'Forging International Collaborations',
						panelists: [
							{ name: 'Carlos Gershenson (Binghamton University, USA)' },
							{ name: 'Misako Takayasu (Institute of Science Tokyo, Japan)' },
							{ name: 'Leihan Tang (Westlake University, China)' }
						],
						moderator: 'Anirban Chakraborti (Jawaharlal Nehru University, India)'
					}
				]
			},
			{ kind: 'break', time: '10:30 – 11:00', title: 'Coffee Break', location: 'MAS Atrium' },
			{
				kind: 'parallel',
				number: 3,
				time: '11:00 – 12:30',
				tracks: [
					{
						name: 'Social, Cultural & Technological Complexity I',
						location: 'SPMS-LT1',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'H. C. W. Price and T. S. Evans (Imperial College London, UK)', title: 'Understanding Main Path Analysis' },
							{ time: '11:15 – 11:30', speaker: 'Gaurav Kottari (Shiv Nadar University, India)', title: 'Structural Pathways and Directional Spillovers: A Network Framework for SDG Prioritisation' },
							{ time: '11:30 – 11:45', speaker: 'Monica Dhyani (Shiv Nadar Institute of Eminence, India)', title: 'User Taxonomy and Positional Dynamics in Online Innovation Networks: Evidence from Stack Overflow' },
							{ time: '11:45 – 12:00', speaker: 'Peter Yen, Yifei Li, Siew Ann Cheong (NTU, Singapore)', title: 'Applying Transformers and Transfer Learning for Training and Predicting Topological Features of AI Citation Networks' },
							{ time: '12:00 – 12:15', speaker: 'Yuxuan Zhang and Ling Feng (National University of Singapore, Singapore)', title: 'Disassortative Mixing in Decentralized Social Network Due to Reciprocal Links' },
							{ time: '12:15 – 12:30', speaker: 'Nishu and Atul Mishra (BML Munjal University, India)', title: 'Predictive to Prescriptive Analytics for Employee Attrition in Complex Workplace Systems' }
						]
					},
					{
						name: 'Foundations of Networks and Complex Systems I',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Riccardo Muolo (RIKEN, Japan), Hiroya Nakao (Institute of Science Tokyo, Japan), Marco Coraggio (Scuola Meridionale Superiore, Italy)', title: 'Weak Higher-Order Interactions Enhance Synchronization' },
							{ time: '11:15 – 11:30', speaker: 'Rong-Chih Chang and Pik-Yin Lai (National Central University, Taiwan)', title: 'Steady-state Response Theory in Noisy Network Dynamics' },
							{ time: '11:30 – 11:45', speaker: 'Minsoo Yang and Byungjun Min (Chungbuk National University, Korea)', title: 'Biconnectivity in Directed Graphs' }
						]
					},
					{
						name: 'Urban Complexity I',
						location: 'SPMS-LT3',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Nikola Stupar (University of Belgrade, Serbia)', title: 'Temporal Structure and Multifractality of Mobility Networks During COVID-19: Empirical Analysis and Mechanistic Modeling' },
							{ time: '11:15 – 11:30', speaker: 'Sehyeong Kang and Inho Hong (Chonnam National University, Korea)', title: 'Urban Features Shape Variations in Distance Deterrence within Metropolitan Mobility Networks' },
							{ time: '11:30 – 11:45', speaker: 'Hideki Takayasu, Haruka K. Ito and Misako Takayasu (Institute of Science Tokyo, Japan)', title: 'Equivalent Electrical Circuit Networks Representing Human Flow in Big Cities' },
							{ time: '11:45 – 12:00', speaker: 'Sebastian Felipe R. Bundoc, Paula Joy B. Martinez, Sebastian C. Ibanez (Center for AI Research, Philippines), Erika Fille T. Legara (Asian Institute of Management, Philippines)', title: 'Student Flow Modeling for School Decongestion via Stochastic Gravity Estimation and Constrained Spatial Allocation' }
						]
					},
					{
						name: 'Focus Session on Evolutionary Games',
						location: 'MAS Executive Classroom 1',
						tba: true,
						talks: []
					}
				]
			},
			{ kind: 'break', time: '12:30 – 13:30', title: 'Lunch Break', location: 'MAS Atrium' },
			{
				kind: 'invited',
				number: 4,
				time: '13:30 – 15:30',
				location: 'SPMS-LT1',
				talks: [
					{ time: '13:30 – 14:00', speaker: 'Parongama Sen (University of Calcutta, India)', title: 'Nonlinear Biased q-Voter Models: Steady States and Persistence Behavior' },
					{ time: '14:00 – 14:30', speaker: 'Fatimah Abdul Razak (Universiti Kebangsaan Malaysia, Malaysia)', title: 'The Social Architecture of Stories: Mapping Connectivity as a Blueprint for Malaysian Resilience' },
					{ time: '14:30 – 15:00', speaker: 'Hsuan-Yi Chen (National Central University, Taiwan)', title: 'The statistical mechanics of detecting weak molecular signals in small complex systems' },
					{
						time: '15:00 – 15:30',
						prefix: 'Meet the Editor Session',
						speaker: 'Jose Fernando Mendes',
						title: 'Editor-in-Chief, MDPI Complexities and Section Editor, MDPI Entropy'
					}
				]
			},
			{ kind: 'break', time: '15:30 – 16:00', title: 'Coffee Break', location: 'MAS Atrium' },
			{
				kind: 'parallel',
				number: 4,
				time: '16:00 – 17:30',
				tracks: [
					{
						name: 'Social, Cultural & Technological Complexity II',
						location: 'SPMS-LT1',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Azhari, Sparisoma Viridi, Acep Purqon (ITB, Indonesia), Roni Muslim (Universitas Sumatera Utara, Indonesia)', title: 'Exploring Multi-Opinion Dynamics in q-Voter Models' },
							{ time: '16:15 – 16:30', speaker: 'Ip Ho Yan Ian and Siew Ann Cheong (NTU, Singapore)', title: 'Mapping Public Opinion onto Political Axes Using Language Models' },
							{ time: '16:30 – 16:45', speaker: 'Cynthia Siew (NUS, Singapore)', title: 'A Comparison of Associative Networks Between Genders: A Singapore English Case Study' },
							{ time: '16:45 – 17:00', speaker: 'Alyssa April Dellow and Fatimah Abdul Razak (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Quantifying Narratives: A Comparative Social Network Analysis of Upin & Ipin Across Series and Film' },
							{ time: '17:00 – 17:15', speaker: 'Muhammad Abraar Abhirama and Siew Ann Cheong (NTU, Singapore)', title: 'Sentence-Level Information Analysis of Narratives' },
							{ time: '17:15 – 17:30', speaker: 'Chee Hyun Park, Eun Lee (Pukyong National University, Korea)', title: 'International Postdocs and Academic Careers with Field-Specific Inequality and Institutional Prestige in South Korean Faculty Hiring' }
						]
					},
					{
						name: 'Foundations of Networks and Complex Systems II',
						location: 'SPMS-LT2',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Peng Peng, Jiming Liu, and Liang Tian (Hong Kong Baptist University, Hong Kong)', title: 'Dynamics-Based Renormalization Group for Complex Networks' },
							{ time: '16:15 – 16:30', speaker: 'Jian Wei Cheong, Andri Pradana, Lock Yue Chew (NTU, Singapore)', title: 'Maxwell’s Uncertain Demon: Achieving Nonclassical and Enhanced Refrigeration when Causality Blurs' },
							{ time: '16:30 – 16:45', speaker: 'Yuhao Wang, Andri Pradana, Jian Wei Cheong, Lock Yue Chew (NTU, Singapore)', title: 'Enhancing Performance and Operational Regimes of Quantum Otto Refrigerator with Heat Bath Algorithmic Cooling' },
							{ time: '16:45 – 17:00', speaker: 'Erik Hormann (James Cook University, Australia) and Renaud Lambiotte (University of Oxford, UK)', title: 'Coarse-graining Directed Networks with Ergodic Sets Preserving Diffusive Dynamics' }
						]
					},
					{
						name: 'Urban Complexity II',
						location: 'SPMS-LT3',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Gyeong Won Jin, Eun Lee (Pukyong National University, Korea), Mi Jin Lee (Pusan National University, Korea)', title: 'Percolation Theory-Based Analysis of Sloped Pedestrian Networks' },
							{ time: '16:15 – 16:30', speaker: 'HyungIn Cho, Kwangsin John Ahn, and SeGi Yu (Hankuk University of Foreign Studies, Korea)', title: 'Urban Store Distribution Explored through Subway Network in Seoul' },
							{ time: '16:30 – 16:45', speaker: 'Dake Wu and Ling Feng (NUS, Singapore)', title: 'Recovery Dynamics Influence in Urban Traffic Capacity and Resilience' },
							{ time: '16:45 – 17:00', speaker: 'Ziming Cheng, Dake Wu, Ling Feng (NUS, Singapore)', title: 'Quantifying Traffic Resistance and Supply Constraints: A Dual-Fluid RECM Approach based on Chengdu Taxi GPS Data' }
						]
					},
					{
						name: 'Focus Session on Evolutionary Games',
						location: 'MAS Executive Classroom 1',
						tba: true,
						talks: []
					}
				]
			}
		]
	},
	// =====================================================================
	{
		slug: '12-june',
		label: 'Friday',
		shortLabel: 'Fri',
		date: '12 June 2026',
		subtitle: 'Conference Day 3',
		items: [
			{ kind: 'registration', time: '08:30 onwards', title: 'Registration', location: 'MAS Atrium' },
			{
				kind: 'invited',
				number: 5,
				time: '08:40 – 10:30',
				location: 'SPMS-LT1',
				talks: [
					{ time: '08:40 – 09:20', speaker: 'Carlos Gershenson (Binghamton University, USA)', title: 'On the Limits of the Scientific Study of Complex Systems' },
					{
						time: '09:20 – 10:00',
						prefix: 'MDPI Entropy Invited Lecture',
						speaker: 'Jose Fernando Mendes (University of Aveiro, Portugal)',
						title: 'TBC'
					},
					{ time: '10:00 – 10:30', speaker: 'Leihan Tang (Westlake University, China)', title: 'Solving Spin Glass Problems Through Physics, Mathematics, and Computation: Spectral Condensation, Domain-Wall Cascades, and the Architecture of Complex States' }
				]
			},
			{ kind: 'break', time: '10:30 – 11:00', title: 'Coffee Break', location: 'MAS Atrium' },
			{
				kind: 'parallel',
				number: 5,
				time: '11:00 – 12:30',
				tracks: [
					{
						name: 'Social, Cultural & Technological Complexity III',
						location: 'SPMS-LT1',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Yukie Sano and Miyuki Murayama (University of Tsukuba, Japan)', title: 'Collective Memory Recall Dynamics on Wikipedia' },
							{ time: '11:15 – 11:30', speaker: 'Lesley F Manatan (World Vision International, Philippines)', title: 'Digital Accessibility in the Philippines: A Complex Systems Perspective' },
							{ time: '11:30 – 11:45', speaker: 'Eun Lee (Pukyong National University, Korea), Ovidia Stanoi, Kevin N. Ochsner (Columbia University, USA), Xie He, Peter J. Mucha (Dartmouth College, USA), Yoona Kang (Rutgers University, USA), Mia Jovanova (University of St Gallen, Switzerland), Amanda L. McGowan, David M. Lydon-Staley, Dani S. Bassett, Emily B. Falk (University of Pennsylvania, USA), Zachary M. Boyd (Brigham Young University, USA)', title: 'Functional and Structural Clustering of Social Relationship Layers Among College Students for Link Prediction with Applications to Perceived Drinking Networks' },
							{ time: '11:45 – 12:00', speaker: 'Yeonji Seo, Mi Jin Lee, Seung-Woo Son (Hanyang University, Korea), Hang-Hyun Jo (Catholic University of Korea, Korea), Yohsuke Murase (RIKEN, Japan)', title: 'How Wikipedia Article Connections Influence Editing Patterns' },
							{ time: '12:00 – 12:15', speaker: 'Yifei Li, Peter Yen, Siew Ann Cheong (NTU, Singapore)', title: 'Applying Transformer Models to Predict Topological Features of AI Citation Networks' },
							{ time: '12:15 – 12:30', speaker: 'Parul Shukla, Manya Khanna, Rajesh Dey (Institute for Interdisciplinary Research, India), Priya Gupta, Anirban Chakraborti (Jawaharlal Nehru University, India), Soumyajyoti Biswas (SRM University, India)', title: 'Multi-Layer Semantic Network Modeling of AI Governance as a Complex Adaptive System' }
						]
					},
					{
						name: 'Computation and Information Processing',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Sidney Wong (University of Otago, New Zealand)', title: 'User Behaviour as a Predictor of Grammatical Similarity within Digital Networks' },
							{ time: '11:15 – 11:30', speaker: 'Pik-Yin Lai (National Central University, Taiwan)', title: 'Reconstructing Connection Weights and Topology of Directed Networks from Noisy Node Dynamics' },
							{ time: '11:30 – 11:45', speaker: 'Jose Marie Antonio Minoza (Center for AI Research, Philippines), Erika Fille T. Legara, Christopher P. Monterola (Asian Institute of Management, Philippines)', title: 'Modularity, not Integration, Underlies Universal Computation in Complex Systems' }
						]
					}
				]
			}
		]
	}
];

export function getDay(slug: string): DayDetail | undefined {
	return dayDetails.find((d) => d.slug === slug);
}
