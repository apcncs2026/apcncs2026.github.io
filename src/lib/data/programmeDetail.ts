// Detailed programme content parsed from design/Programme.docx and Focus CoAI program.docx.
// Used by /programme/10-june, /programme/11-june, /programme/12-june.

export interface Panelist {
	name: string;
	note?: string; // e.g. "TBC"
}

// Where an abstract file lives. `type` maps to the static/abstract/<type>/ subfolder,
// so this extends from invited talks to contributed presentations without changing the schema.
export type AbstractType = 'invited' | 'presentation' | 'summer-school';

export interface AbstractRef {
	type: AbstractType;
	file: string; // filename within static/abstract/<type>/, e.g. "leihan-tang.docx"
}

export function abstractUrl(ref: AbstractRef): string {
	return `/abstract/${ref.type}/${ref.file}`;
}

export interface Talk {
	time: string;
	prefix?: string; // "Opening Address", "Advances in Complex Systems Invited Lecture", etc.
	speaker?: string; // "Marton Karsai (Central European University, Austria)"
	title?: string; // talk title; "TBC" allowed
	abstract?: AbstractRef; // downloadable abstract, e.g. { type: 'invited', file: 'leihan-tang.docx' }
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

// A single summer-school timeline entry (lecture, opening/closing remarks, or panel).
// Rendered as a standalone card; breaks/registration use BlockItem instead.
export interface Lecture {
	kind: 'lecture';
	time: string;
	label: string; // "Lecture 1", "Opening Remarks", "Panel Discussion / Open Q&A", "Closing Remarks"
	speaker?: string; // "Marton Karsai (Central European University, Austria)"
	title?: string; // talk title; "TBC" allowed
	tutors?: string; // accompanying tutors, e.g. "S. Biswas, H.K. Pharasi and A. Chakraborti"
	note?: string; // supporting line, e.g. "Overview of summer school objectives"
	abstract?: AbstractRef; // downloadable abstract, e.g. { type: 'summer-school', file: 'jose-fernando-mendes.pdf' }
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
	number?: number; // omitted for standalone special sessions (e.g. a focus session) — use `title`
	title?: string; // header override; defaults to "Parallel Session {number}"
	note?: string; // optional line under the header, e.g. a concurrency note
	time: string;
	tracks: ParallelTrack[];
}

export interface BlockItem {
	kind: 'registration' | 'break' | 'note';
	time: string;
	title: string;
	location?: string;
}

export type DayItem = InvitedSession | ParallelSession | BlockItem | Lecture;

export interface DayDetail {
	slug: '9-june' | '10-june' | '11-june' | '12-june';
	label: string; // weekday
	shortLabel: string;
	date: string; // "10 June 2026"
	subtitle: string;
	items: DayItem[];
}

export const dayDetails: DayDetail[] = [
	// =====================================================================
	{
		slug: '9-june',
		label: 'Tuesday',
		shortLabel: 'Tue',
		date: '9 June 2026',
		subtitle: 'Summer School',
		items: [
			{ kind: 'registration', time: '08:45 – 09:00', title: 'Registration & Welcome Coffee' },
			{ kind: 'lecture', time: '09:00 – 09:10', label: 'Opening Remarks', note: 'Overview of summer school objectives' },
			{ kind: 'lecture', time: '09:10 – 10:10', label: 'Lecture 1', speaker: 'Marton Karsai (Central European University, Austria)', title: 'Temporal Networks and Spreading Phenomena' },
			{ kind: 'break', time: '10:10 – 10:30', title: 'Coffee Break' },
			{ kind: 'lecture', time: '10:30 – 11:30', label: 'Lecture 2', speaker: 'Lock Yue Chew (NTU, Singapore)', title: 'Information Thermodynamics: Classical and Quantum Perspective' },
			{ kind: 'lecture', time: '11:30 – 12:30', label: 'Lecture 3', speaker: 'Misako Takayasu (Institute of Science Tokyo, Japan)', title: 'Money-Flow Network among About 1 Million Business Firms in Japan' },
			{ kind: 'break', time: '12:30 – 14:00', title: 'Lunch Break' },
			{ kind: 'lecture', time: '14:00 – 15:00', label: 'Lecture 4', speaker: 'Anirban Chakraborti (Jawaharlal Nehru University, India)', title: 'Complex Systems Studies using Machine Learning', tutors: 'S. Biswas, H.K. Pharasi and A. Chakraborti' },
			{ kind: 'break', time: '15:00 – 15:20', title: 'Coffee Break' },
			{ kind: 'lecture', time: '15:20 – 16:20', label: 'Lecture 5', speaker: 'Academic Publication Workshop (APW)', title: 'Writing, Publishing Strategies, Peer Review Insights' },
			{
				kind: 'lecture',
				time: '16:20 – 17:20',
				label: 'Lecture 6',
				speaker: 'Jose Fernando Mendes (University of Aveiro, Portugal)',
				title: 'Navigating Through Complexity: From Emergence to Networks',
				abstract: { type: 'summer-school', file: 'jose-fernando-mendes.pdf' }
			},
			{ kind: 'lecture', time: '17:20 – 17:40', label: 'Panel Discussion / Open Q&A', speaker: 'All summer-school speakers (if available)', note: 'Research directions, careers, and interdisciplinary work' },
			{ kind: 'lecture', time: '17:40 – 17:45', label: 'Closing Remarks' }
		]
	},
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
						title: 'Socioeconomic Networks, Segregation Patterns and Their Dynamics',
						abstract: { type: 'invited', file: 'marton-karsai.docx' }
					},
					{ time: '09:20 – 10:05', speaker: 'Misako Takayasu (Institute of Science Tokyo, Japan)', title: 'Modeling the Gut Microbiome Ecosystem Based on a Random Multiplicative Process', abstract: { type: 'invited', file: 'misako-takayasu.docx' } },
					{
						time: '10:05 – 10:30',
						prefix: 'Panel Discussion 1',
						panelTitle: 'How to Do Impactful Research?',
						panelists: [
							{ name: 'Ginestra Bianconi (Queen Mary University of London, UK)' },
							{ name: 'Marton Karsai (Central European University, Austria)' },
							{ name: 'Hawoong Jeong (KAIST, Korea)' }
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
							{ time: '11:00 – 11:15', speaker: 'Marta Zava (Bocconi University, Italy)', title: 'Network Motifs and the Rise of Entrepreneurial Ecosystems', abstract: { type: 'presentation', file: 'marta-zava.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Galvin Ng (CSH Vienna, Austria), Damien Bertrand (EPFL, Switzerland), Luca Mungo (University of Oxford, UK), and François Lafond (University of Oxford, UK)', title: 'Synthetic Supply Networks', abstract: { type: 'presentation', file: 'galvin-ng.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Imran Ansari, Shashi Jain, Srikant Iyer (IISc Bangalore, India)', title: 'Network-Based Portfolio Optimization from Denoised Financial Correlation Matrices', abstract: { type: 'presentation', file: 'imran-ansari.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Pawanesh (OP Jindal Global University, India), Charu Sharma and Niteesh Sahni (Shiv Nadar Institute of Eminence, India)', title: 'Communicability Reveals Crisis-Specific Structural Reorganization in Financial Networks', abstract: { type: 'presentation', file: 'pawanesh.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Wei Ting Lim and Siew Ann Cheong (NTU, Singapore)', title: 'The Geometry of Panic: Multiscale Functional Analysis of Stock Market Dynamics', abstract: { type: 'presentation', file: 'wei-ting-lim.pdf' } },
							{ time: '12:15 – 12:30', speaker: 'Haoting Xie and Siew Ann Cheong (NTU, Singapore)', title: 'Information Dynamics and Structural Transitions in Nikkei 225 Correlation Networks', abstract: { type: 'presentation', file: 'haoting-xie.pdf' } }
						]
					},
					{
						name: 'Biological and Ecological Complexity I',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Mi Jin Lee (Pusan National University, Korea) and Deok-Sun Lee (KIAS, Korea)', title: 'Heterogeneous Popularity of Metabolic Reactions from Evolution', abstract: { type: 'presentation', file: 'mi-jin-lee.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Felix V. Kohane, Guocheng Huang, Ihuan Gunawan, Daniel P. Neumann, John G. Lock (UNSW Sydney, Australia), Christine Chaffer (Garvan Institute for Medical Research, Australia)', title: 'Cell Molecular Signalling Dynamics, Including Noise, are Pre-Tuned by Cell Phenotypic State', abstract: { type: 'presentation', file: 'john-lock.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Rahul Verma (Amity University, India)', title: 'Co-Mutation Based Genetic Networks to Infer Temporal Mutation Dynamics in Ancient Human Mitochondrial Genomes', abstract: { type: 'presentation', file: 'rahul-verma.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Hon Lin Too, Farisan Dary, Isaac Si Yuan Ling, Dustin Erhard Theofilus, Ee Hou Yong (NTU, Singapore), Haiyi Liang (USTC, China)', title: 'Emergence of Hexanematic Order in a Growing Confluent Cell Monolayer', abstract: { type: 'presentation', file: 'hon-lin-too.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Antai Tao (USTC, China)', title: 'Bacterial Strategies for Navigating Surface Constraints', abstract: { type: 'presentation', file: 'antai-tao.pdf' } }
						]
					},
					{
						name: 'Dynamics on and of Complex Networks',
						location: 'SPMS-LT3',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Atiyab Zafar, Sanjay Jain (University of Delhi, India)', title: 'Rising Inequality and a ‘Power Shift’ from the Core to a Parasitic Periphery are Precursors of Collapse', abstract: { type: 'presentation', file: 'atiyab-zafar.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Suwannachad Suwannajitt (Chulalongkorn University, Thailand)', title: 'Universal Stagnation Dynamics in Quantum Imaginary-Time Evolution', abstract: { type: 'presentation', file: 'suwannachad-suwannajitt.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Eugene Tan (University of Western Australia, Australia)', title: 'Dimensions of Hypergraphs using Spreading Processes', abstract: { type: 'presentation', file: 'eugene-tan.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Liyana Truna, Fatimah Abdul Razak, Roslinda Nazar (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Network-Based Characterization of Laminar Flow Using Complex Network Theory: A Data-Driven Analysis of Skin Friction and Heat Transfer', abstract: { type: 'presentation', file: 'liyana-truna.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Charli Chinmayee Pal and Prasanta Kumar Mahapatra (Siksha ‘O’ Anusandhan, India)', title: 'Exact Prime Density Reproduced Through Resonant Tunneling across a Double Barrier System', abstract: { type: 'presentation', file: 'charli-chinmayee-pal.pdf' } },
							{ time: '12:15 – 12:30', speaker: 'Ram Pravesh Yadav, R.K. Brojen Singh, Anirban Chakraborti (Jawaharlal Nehru University, India), Hirdesh K. Pharasi (BML Munjal University, India)', title: 'Complex Dynamics of the Hindmarsh-Rose Neuron Model with Blue-Sky Catastrophe under a Magnetic Field and Noise', abstract: { type: 'presentation', file: 'ram-pravesh-yadav.pdf' } }
						]
					},
					{
						name: 'Focus Session on Complexity of AI',
						location: 'MAS Executive Classroom 1',
						chair: 'Lock Yue Chew (NTU, Singapore)',
						talks: [
							{ time: '11:00 – 11:30', speaker: 'Justin Dauwels (TU Delft, Netherlands)', title: 'When AI Becomes a Complex System: Agents, Emergence, and Real-World Applications (Invited)', abstract: { type: 'invited', file: 'justin-dauwels.pdf' } },
							{ time: '11:30 – 12:00', speaker: 'Thiparat Chotibut (Chulalongkorn University, Thailand)', title: 'Reinforcement Learning in Population Games: From Microscopic Chaos to Macroscopic Equilibrium (Invited)', abstract: { type: 'invited', file: 'thiparat-chotibut-population-games.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Jaroonrak Omsap, Andri Pradana, Yew Soon Ong, and Lock Yue Chew (NTU, Singapore)', title: 'Deep Reinforcement Learning for Passenger Transfer Synchronization in a Bus Network', abstract: { type: 'presentation', file: 'jaroonrak-omsap.pdf' } },
							{ time: '12:15 – 12:30', speaker: 'Zheng Tien Kang, Peter Tsung-Wen Yen, Kelin Xia, Siew Ann Cheong (NTU, Singapore)', title: 'Building a Time Series Vision Transformer with Small, High-Resolution Datasets', abstract: { type: 'presentation', file: 'kang-zheng-tien.pdf' } },
							{ time: '12:30 – 12:45', speaker: 'Andri Pradana, Lock Yue Chew, and Bo Yang (NTU, Singapore)', title: 'Discovery of Bus Control Strategies with Reinforcement Learning to Optimize Commuter-Centric Objective', abstract: { type: 'presentation', file: 'andri-pradana.pdf' } }
						]
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
					{ time: '13:30 – 14:00', speaker: 'Lock Yue Chew (NTU, Singapore)', title: 'Dynamical scheduling and statistical physics of city-scale bus network with reinforcement learning', abstract: { type: 'invited', file: 'lock-yue-chew.docx' } },
					{ time: '14:00 – 14:30', speaker: 'Sarah Russell (Peter MacCallum Cancer Centre & Swinburne University of Technology, Australia)', title: 'T cell development: Coordinated self-organisation at the level of the cell, the organ and the body', abstract: { type: 'invited', file: 'sarah-russell.docx' } },
					{ time: '14:30 – 15:00', speaker: 'Thiparat Chotibut (Chulalongkorn University, Thailand)', title: 'Robust Sequence Recognition in Random Neuronal Networks', abstract: { type: 'invited', file: 'thiparat-chotibut.pdf' } },
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
							{ time: '16:00 – 16:15', speaker: 'Ardian Maulana, Hokky Situngkir (ITB, Indonesia)', title: 'Cascade Regimes and Corridor Backbones in Indonesia’s Production Network', abstract: { type: 'presentation', file: 'ardian-maulana.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'Pradeep Moturi and Siew Ann Cheong (NTU, Singapore)', title: 'Spatio-Temporal Topological Data Analysis of Ethereum’s Transaction Data', abstract: { type: 'presentation', file: 'pradeep-moturi.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Sudip Sarkar and Soumyajyoti Biswas (SRM University, India)', title: 'Large Earthquakes Follow Highly Unequal Ones', abstract: { type: 'presentation', file: 'sudip-sarkar.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Einar C. Kjenstad (UiT The Arctic University of Norway, Norway), Peter Tsung-Wen Yen, Siew Ann Cheong (NTU, Singapore)', title: 'Estimating Parameter Heterogeneity in Decision Programs by Spatial Quasi-Differentiation (SQD)', abstract: { type: 'presentation', file: 'einar-kjenstad.pdf' } },
							{ time: '17:00 – 17:15', speaker: 'Mahdi Sayyadi (Åbo Akademi University, Finland)', title: 'Generative AI as a Complex Adaptive System: Adoption Dynamics and Emergent Entrepreneurial Practices in Finland', abstract: { type: 'presentation', file: 'mahdi-sayyadi.pdf' } },
							{ time: '17:15 – 17:30', speaker: 'Martin F. Diaz, Josep Perello, Miquel Montero (University of Barcelona, Spain)', title: 'Quantifying Adaptive Strategies in Regulated and Unregulated Simulated Housing Markets', abstract: { type: 'presentation', file: 'martin-diaz.pdf' } }
						]
					},
					{
						name: 'Biological and Ecological Complexity II',
						location: 'SPMS-LT2',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Manya Khanna, Sudeep Shukla (Institute for Interdisciplinary Research, India), Abbinav Sankar Kailasam (University College London, UK), Ashok Kumar, Priya Gupta, Anirban Chakraborti (Jawaharlal Nehru University, India), Rajiba Lochan Sahoo, Amiya Ranjan Bhowmick (Institute of Chemical Technology, India), Sourish Das (Chennai Mathematical Institute, India)', title: 'Complex Dynamical Study of ESG Factors and Crop Price Volatility in India', abstract: { type: 'presentation', file: 'manya-khanna.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'Athokpam Langlen Chanu, Youngjai Park, Jong-Min Park (POSTECH, Korea), Jaesung Choi (KIAS, Korea), Younghwa Cha, Joon-Young Moon (Sungkyunkwan University, Korea), UnCheol Lee (University of Michigan Ann Arbor, USA)', title: 'Human Brain State Classification via Permutation Entropy of EEG Phase Dynamics', abstract: { type: 'presentation', file: 'athokpam-langlen-chanu.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Soorya PP and Biswambhar Rakshit (Amrita School of Physical Sciences, India)', title: 'Emergence of Metastability in Spatially Embedded Neuronal Networks with Higher-Order Interactions', abstract: { type: 'presentation', file: 'soorya-pp.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Mengna Liu, Antai Tao, Rongjing Zhang, Junhua Yuan (USTC, China)', title: 'Shear-Induced Oscillations and Hydrodynamic Buffering Stabilize Sperm Surface Navigation', abstract: { type: 'presentation', file: 'mengna-liu.pdf' } },
							{ time: '17:00 – 17:15', speaker: 'Yasharth Yadav, Kelin Xia (NTU, Singapore)', title: 'Periodic Topological Deep Learning for Polymer Design and Discovery', abstract: { type: 'presentation', file: 'yasharth-yadav.docx' } }
						]
					},
					{
						name: 'Health System Complexity',
						location: 'SPMS-LT3',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Siti Najiha Md Asari, Fatimah Abdul Razak, Nazarudin Safian (Universiti Kebangsaan Malaysia, Malaysia), Mohd Rahim Sulong, Wan Ming Keong (Ministry of Health, Malaysia)', title: 'Comparing Dengue Transmission Network Complexity Between High-Density and Low-Density Districts in Malaysia', abstract: { type: 'presentation', file: 'siti-najiha-md-asari.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'Saif Nasr, Inho Hong (Chonnam National University, Korea), Hyung Doo Kim (Hanyang University Churi Hospital, Korea)', title: 'Mapping the Network of Environmental Exposure Using Mixed Graphical Models', abstract: { type: 'presentation', file: 'saif-nasr.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Adithi Kalyanaraman and R. K. Kapilavani (Sri Venkateswara College of Engineering, India)', title: 'Higher-Order Drug Interaction Hypergraphs with Hybrid Quantum Optimization for Parkinson’s Disease', abstract: { type: 'presentation', file: 'adithi-kalyanaraman.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Muhamad Aiman Hakim (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Early Warning Signals and Sentinel Nodes in Network Epidemics', abstract: { type: 'presentation', file: 'muhamad-aiman-hakim.pdf' } },
							{ time: '17:00 – 17:15', speaker: 'Jesus Felix B. Valenzuela, Erika Fille T. Legara, Christopher P. Monterola (Asian Institute of Management, Philippines), Paula Joy Martinez (Center for AI Research, Philippines)', title: 'Emergence of Consensus Proceeds in Phases: Tracking Themes Across the Negotiations of the WHO Pandemic Agreement', abstract: { type: 'presentation', file: 'jesus-felix-valenzuela.pdf' } }
						]
					},
					{
						name: 'Focus Session on Complexity of AI',
						location: 'MAS Executive Classroom 1',
						chair: 'Ling Feng (Institute of High Performance Computing, A*STAR Singapore)',
						talks: [
							{ time: '16:00 – 16:30', speaker: 'Carlo Vittorio Cannistraci (Tsinghua University, China)', title: 'Brain-Inspired Sparse Network Science for Next Generation Efficient and Sustainable AI (Invited)', abstract: { type: 'invited', file: 'carlo-vittorio-cannistraci.docx' } },
							{ time: '16:30 – 17:00', speaker: 'Florian Rossmannek (NTU, Singapore)', title: 'State-Space Systems for Learning from Temporal Data (Invited)', abstract: { type: 'invited', file: 'florian-rossmannek.docx' } },
							{ time: '17:00 – 17:15', speaker: 'Dishant Sisodia and Sarika Jalan (Indian Institute of Technology Indore, India)', title: 'Dynamical Analysis of a Reservoir Computer', abstract: { type: 'presentation', file: 'dishant-sisodia.pdf' } },
							{ time: '17:15 – 17:30', speaker: 'Feixiang Ren and Ling Feng (National University of Singapore, Singapore)', title: 'Towards Critical Branching Mechanism in Recurrent Neural Networks', abstract: { type: 'presentation', file: 'feixiang-ren.pdf' } },
							{ time: '17:30 – 17:45', speaker: 'Derek D. C. Chang, Graeme D. Berk, and Mile Gu (NTU, Singapore)', title: 'Complexity in Quantum Processes & Reservoir Computing', abstract: { type: 'presentation', file: 'derek-chang.docx' } }
						]
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
					{ time: '08:45 – 09:20', speaker: 'Ginestra Bianconi (Queen Mary University of London, UK)', title: 'Learning the Topology of Higher-Order Networks from Their Dynamics', abstract: { type: 'invited', file: 'ginestra-bianconi.docx' } },
					{ time: '09:20 – 10:05', speaker: 'Hawoong Jeong (KAIST, Korea)', title: 'Understanding Complex Systems via Network, Data, AI', abstract: { type: 'invited', file: 'hawoong-jeong.docx' } },
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
							{ time: '11:00 – 11:15', speaker: 'H. C. W. Price and T. S. Evans (Imperial College London, UK)', title: 'Understanding Main Path Analysis', abstract: { type: 'presentation', file: 'timothy-evans.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Gaurav Kottari (Shiv Nadar University, India)', title: 'Structural Pathways and Directional Spillovers: A Network Framework for SDG Prioritisation', abstract: { type: 'presentation', file: 'gaurav-kottari.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Monica Dhyani (Shiv Nadar Institute of Eminence, India)', title: 'User Taxonomy and Positional Dynamics in Online Innovation Networks: Evidence from Stack Overflow', abstract: { type: 'presentation', file: 'monica-dhyani.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Peter Yen, Yifei Li, Siew Ann Cheong (NTU, Singapore)', title: 'Applying Transformers and Transfer Learning for Training and Predicting Topological Features of AI Citation Networks', abstract: { type: 'presentation', file: 'peter-yen.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Yuxuan Zhang and Ling Feng (National University of Singapore, Singapore)', title: 'Disassortative Mixing in Decentralized Social Network Due to Reciprocal Links', abstract: { type: 'presentation', file: 'yuxuan-zhang.pdf' } },
							{ time: '12:15 – 12:30', speaker: 'Nishu and Atul Mishra (BML Munjal University, India)', title: 'Predictive to Prescriptive Analytics for Employee Attrition in Complex Workplace Systems', abstract: { type: 'presentation', file: 'nishu.pdf' } }
						]
					},
					{
						name: 'Foundations of Networks and Complex Systems I',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Riccardo Muolo (RIKEN, Japan), Hiroya Nakao (Institute of Science Tokyo, Japan), Marco Coraggio (Scuola Meridionale Superiore, Italy)', title: 'Weak Higher-Order Interactions Enhance Synchronization', abstract: { type: 'presentation', file: 'riccardo-muolo.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Pik-Yin Lai (National Central University, Taiwan)', title: 'Reconstructing Connection Weights and Topology of Directed Networks from Noisy Node Dynamics', abstract: { type: 'presentation', file: 'pik-yin-lai.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Rong-Chih Chang and Pik-Yin Lai (National Central University, Taiwan)', title: 'Steady-state Response Theory in Noisy Network Dynamics', abstract: { type: 'presentation', file: 'rong-chih-chang.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Minsoo Yang and Byungjun Min (Chungbuk National University, Korea)', title: 'Biconnectivity in Directed Graphs', abstract: { type: 'presentation', file: 'minsoo-yang.pdf' } }
						]
					},
					{
						name: 'Urban Complexity I',
						location: 'SPMS-LT3',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Nikola Stupar (University of Belgrade, Serbia)', title: 'Temporal Structure and Multifractality of Mobility Networks During COVID-19: Empirical Analysis and Mechanistic Modeling', abstract: { type: 'presentation', file: 'nikola-stupar.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Sehyeong Kang and Inho Hong (Chonnam National University, Korea)', title: 'Urban Features Shape Variations in Distance Deterrence within Metropolitan Mobility Networks', abstract: { type: 'presentation', file: 'inho-hong.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Hideki Takayasu, Haruka K. Ito and Misako Takayasu (Institute of Science Tokyo, Japan)', title: 'Equivalent Electrical Circuit Networks Representing Human Flow in Big Cities', abstract: { type: 'presentation', file: 'hideki-takayasu.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Isabella Rangel (University of Southern California, USA)', title: 'Optimizing Ethiopia’s Crop Storage Infrastructure: A Geospatial and Network Science Approach', abstract: { type: 'presentation', file: 'isabella-rangel.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Sebastian Felipe R. Bundoc, Paula Joy B. Martinez, Sebastian C. Ibanez (Center for AI Research, Philippines), Erika Fille T. Legara (Asian Institute of Management, Philippines)', title: 'Student Flow Modeling for School Decongestion via Stochastic Gravity Estimation and Constrained Spatial Allocation', abstract: { type: 'presentation', file: 'sebastian-felipe-bundoc.pdf' } }
						]
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
					{ time: '13:30 – 14:00', speaker: 'Parongama Sen (University of Calcutta, India)', title: 'Nonlinear Biased q-Voter Models: Steady States and Persistence Behavior', abstract: { type: 'invited', file: 'parongama-sen.docx' } },
					{ time: '14:00 – 14:30', speaker: 'Fatimah Abdul Razak (Universiti Kebangsaan Malaysia, Malaysia)', title: 'The Social Architecture of Stories: Mapping Connectivity as a Blueprint for Malaysian Resilience', abstract: { type: 'invited', file: 'fatimah-abdul-razak.docx' } },
					{ time: '14:30 – 15:00', speaker: 'Hsuan-Yi Chen (National Central University, Taiwan)', title: 'The Statistical Mechanics of Detecting Weak Molecular Signals in Small Complex Systems', abstract: { type: 'invited', file: 'hsuan-yi-chen.docx' } },
					{
						time: '15:00 – 15:30',
						prefix: 'Meet the Editor Session',
						speaker: 'Jose Fernando Mendes',
						title: 'Editor-in-Chief, MDPI Complexities and Section Editor, MDPI Entropy'
					}
				]
			},
			// Focus Session: Games on Complex Systems — runs concurrently with Invited Session 4.
			// PENDING: invited speaker Prof. Wenwu Yu (Southeast University, China) awaits administrative
			// approval; if confirmed he opens the session and Jie Zhao's talk is shortened. Held off until confirmed.
			{
				kind: 'parallel',
				title: 'Focus Session: Games on Complex Systems',
				note: 'Runs in parallel with Invited Session 4.',
				time: '13:30 – 15:45',
				tracks: [
					{
						name: 'Games on Complex Systems',
						location: 'MAS Executive Classroom 1',
						talks: [
							{ time: '13:30 – 14:30', speaker: 'Jie Zhao', title: 'Visual Evolutionary Optimization through Strategic Interactions on Graph-Structured Combinatorial Problems (Invited)' },
							{ time: '14:30 – 14:45', speaker: 'Kang Hao Cheong', title: 'Introduction to Parrondo’s Games' },
							{ time: '14:45 – 15:00', speaker: 'Ee Hou Yong', title: 'Pareto Optimality and Evolutionary Trade-Offs in Nature' },
							{ time: '15:00 – 15:15', speaker: 'Ankit Mishra', title: 'When Switching Beats Choice in Network Routing: A Parrondo’s Games Perspective (Invited)' },
							{ time: '15:15 – 15:30', speaker: 'Nixie Sapphira Lesmana, Ling Feng, Kan Chen and Choy Heng Lai', title: 'Self-Organization to the Edge of Ergodicity Breaking in a Complex Adaptive System', abstract: { type: 'presentation', file: 'nixie-sapphira-lesmana.pdf' } },
							{ time: '15:30 – 15:45', speaker: 'Xiang Zhang', title: 'Adversarial Graph Topology Game: Wasserstein Distributionally Robust Graph Learning' }
						]
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
							{ time: '16:00 – 16:15', speaker: 'Azhari, Sparisoma Viridi, Acep Purqon (ITB, Indonesia), Roni Muslim (Universitas Sumatera Utara, Indonesia)', title: 'Exploring Multi-Opinion Dynamics in q-Voter Models', abstract: { type: 'presentation', file: 'azhari.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'Ip Ho Yan Ian and Siew Ann Cheong (NTU, Singapore)', title: 'Mapping Public Opinion onto Political Axes Using Language Models', abstract: { type: 'presentation', file: 'ip-ho-yan-ian.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Cynthia Siew (NUS, Singapore)', title: 'A Comparison of Associative Networks Between Genders: A Singapore English Case Study', abstract: { type: 'presentation', file: 'cynthia-siew.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Alyssa April Dellow and Fatimah Abdul Razak (Universiti Kebangsaan Malaysia, Malaysia)', title: 'Quantifying Narratives: A Comparative Social Network Analysis of Upin & Ipin Across Series and Film', abstract: { type: 'presentation', file: 'alyssa-april-dellow.pdf' } },
							{ time: '17:00 – 17:15', speaker: 'Muhammad Abraar Abhirama and Siew Ann Cheong (NTU, Singapore)', title: 'Sentence-Level Information Analysis of Narratives', abstract: { type: 'presentation', file: 'muhammad-abraar-abhirama.pdf' } },
							{ time: '17:15 – 17:30', speaker: 'Chee Hyun Park, Eun Lee (Pukyong National University, Korea)', title: 'International Postdocs and Academic Careers with Field-Specific Inequality and Institutional Prestige in South Korean Faculty Hiring', abstract: { type: 'presentation', file: 'chee-hyun-park.pdf' } }
						]
					},
					{
						name: 'Foundations of Networks and Complex Systems II',
						location: 'SPMS-LT2',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Peng Peng, Jiming Liu, and Liang Tian (Hong Kong Baptist University, Hong Kong)', title: 'Dynamics-Based Renormalization Group for Complex Networks', abstract: { type: 'presentation', file: 'peng-peng.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'Jian Wei Cheong, Andri Pradana, Lock Yue Chew (NTU, Singapore)', title: 'Maxwell’s Uncertain Demon: Achieving Nonclassical and Enhanced Refrigeration when Causality Blurs', abstract: { type: 'presentation', file: 'jian-wei-cheong.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Yuhao Wang, Andri Pradana, Jian Wei Cheong, Lock Yue Chew (NTU, Singapore)', title: 'Enhancing Performance and Operational Regimes of Quantum Otto Refrigerator with Heat Bath Algorithmic Cooling', abstract: { type: 'presentation', file: 'yuhao-wang.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Erik Hormann (James Cook University, Australia) and Renaud Lambiotte (University of Oxford, UK)', title: 'Coarse-graining Directed Networks with Ergodic Sets Preserving Diffusive Dynamics', abstract: { type: 'presentation', file: 'erik-hormann.pdf' } }
						]
					},
					{
						name: 'Urban Complexity II',
						location: 'SPMS-LT3',
						talks: [
							{ time: '16:00 – 16:15', speaker: 'Gyeong Won Jin, Eun Lee (Pukyong National University, Korea), Mi Jin Lee (Pusan National University, Korea)', title: 'Percolation Theory-Based Analysis of Sloped Pedestrian Networks', abstract: { type: 'presentation', file: 'gyeong-won-jin.pdf' } },
							{ time: '16:15 – 16:30', speaker: 'HyungIn Cho, Kwangsin John Ahn, and SeGi Yu (Hankuk University of Foreign Studies, Korea)', title: 'Urban Store Distribution Explored through Subway Network in Seoul', abstract: { type: 'presentation', file: 'segi-yu.pdf' } },
							{ time: '16:30 – 16:45', speaker: 'Dake Wu and Ling Feng (NUS, Singapore)', title: 'Recovery Dynamics Influence in Urban Traffic Capacity and Resilience', abstract: { type: 'presentation', file: 'dake-wu.pdf' } },
							{ time: '16:45 – 17:00', speaker: 'Ziming Cheng, Dake Wu, Ling Feng (NUS, Singapore)', title: 'Quantifying Traffic Resistance and Supply Constraints: A Dual-Fluid RECM Approach based on Chengdu Taxi GPS Data', abstract: { type: 'presentation', file: 'ziming-cheng.pdf' } }
						]
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
					{ time: '08:40 – 09:20', speaker: 'Carlos Gershenson (Binghamton University, USA)', title: 'On the Limits of the Scientific Study of Complex Systems', abstract: { type: 'invited', file: 'carlos-gershenson.docx' } },
					{
						time: '09:20 – 10:00',
						prefix: 'MDPI Entropy Invited Lecture',
						speaker: 'Jose Fernando Mendes (University of Aveiro, Portugal)',
						title: 'TBC'
					},
					{ time: '10:00 – 10:30', speaker: 'Leihan Tang (Westlake University, China)', title: 'Solving Spin Glass Problems Through Physics, Mathematics, and Computation: Spectral Condensation, Domain-Wall Cascades, and the Architecture of Complex States', abstract: { type: 'invited', file: 'leihan-tang.docx' } }
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
							{ time: '11:00 – 11:15', speaker: 'Yukie Sano and Miyuki Murayama (University of Tsukuba, Japan)', title: 'Collective Memory Recall Dynamics on Wikipedia', abstract: { type: 'presentation', file: 'yukie-sano.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Eun Lee (Pukyong National University, Korea), Ovidia Stanoi, Kevin N. Ochsner (Columbia University, USA), Xie He, Peter J. Mucha (Dartmouth College, USA), Yoona Kang (Rutgers University, USA), Mia Jovanova (University of St Gallen, Switzerland), Amanda L. McGowan, David M. Lydon-Staley, Dani S. Bassett, Emily B. Falk (University of Pennsylvania, USA), Zachary M. Boyd (Brigham Young University, USA)', title: 'Functional and Structural Clustering of Social Relationship Layers Among College Students for Link Prediction with Applications to Perceived Drinking Networks', abstract: { type: 'presentation', file: 'eun-lee.pdf' } },
							{ time: '11:30 – 11:45', speaker: 'Yeonji Seo, Mi Jin Lee, Seung-Woo Son (Hanyang University, Korea), Hang-Hyun Jo (Catholic University of Korea, Korea), Yohsuke Murase (RIKEN, Japan)', title: 'How Wikipedia Article Connections Influence Editing Patterns', abstract: { type: 'presentation', file: 'yeonji-seo.pdf' } },
							{ time: '11:45 – 12:00', speaker: 'Yifei Li, Peter Yen, Siew Ann Cheong (NTU, Singapore)', title: 'Applying Transformer Models to Predict Topological Features of AI Citation Networks', abstract: { type: 'presentation', file: 'yifei-li.pdf' } },
							{ time: '12:00 – 12:15', speaker: 'Parul Shukla, Manya Khanna, Rajesh Dey (Institute for Interdisciplinary Research, India), Priya Gupta, Anirban Chakraborti (Jawaharlal Nehru University, India), Soumyajyoti Biswas (SRM University, India)', title: 'Multi-Layer Semantic Network Modeling of AI Governance as a Complex Adaptive System', abstract: { type: 'presentation', file: 'parul-shukla.pdf' } },
							{ time: '12:15 – 12:30', speaker: 'Lesley F Manatan (World Vision International, Philippines)', title: 'Digital Accessibility in the Philippines: A Complex Systems Perspective', abstract: { type: 'presentation', file: 'lesley-manatan.pdf' } }
						]
					},
					{
						name: 'Computation and Information Processing',
						location: 'SPMS-LT2',
						talks: [
							{ time: '11:00 – 11:15', speaker: 'Sidney Wong (University of Otago, New Zealand)', title: 'User Behaviour as a Predictor of Grammatical Similarity within Digital Networks', abstract: { type: 'presentation', file: 'sidney-wong.pdf' } },
							{ time: '11:15 – 11:30', speaker: 'Jose Marie Antonio Minoza (Center for AI Research, Philippines), Erika Fille T. Legara, Christopher P. Monterola (Asian Institute of Management, Philippines)', title: 'Modularity, not Integration, Underlies Universal Computation in Complex Systems', abstract: { type: 'presentation', file: 'jose-marie-antonio-minoza.pdf' } }
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
