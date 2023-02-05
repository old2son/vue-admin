export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: AssemblySizeType;
	language: string;
	themeConfig: ThemeConfigProps;
	[propName: string]: any;	// 任意数量其它属性
}

export interface ThemeConfigProps {
	maximize: boolean;
	layout: LayoutType;
	primary: string;
	isDark: boolean;
	isGrey: boolean;
	isCollapse: boolean;
	isWeak: boolean;
	breadcrumb: boolean;
	breadcrumbIcon: boolean;
	tabs: boolean;
	tabsIcon: boolean;
	footer: boolean;
}

export type AssemblySizeType = 'default' | 'small' | 'large';

export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns';
