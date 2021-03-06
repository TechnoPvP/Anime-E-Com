import type { Asset } from '@chec/commerce.js/types/asset';
import type { SelectedVariant } from '@chec/commerce.js/types/selected-variant';
import type { HorizontalLocation, VerticalLocation } from './types';

export interface AlignLocation {
	horizontal: HorizontalLocation;
	vertical: VerticalLocation;
}

export interface VariantGroup {
	name: string;
	id: string;
	options: VariantOption[];
}

export interface VariantOption {
	name: string;
	id: string;
	assets?: Asset[];
}

export interface Product {
	thumbnail: string;
	title: string;
	price: number;
	productId: string;
	id: string;
	variants?: VariantGroup[];
}

export interface CartProduct extends Product {
	quanity: number;
	variants?: VariantGroup[];
}

export interface ISelectedVariant {
	[group: string]: SelectedVariant & { assets: Asset[] };
}
