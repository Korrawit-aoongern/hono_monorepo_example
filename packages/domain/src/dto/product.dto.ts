// ใช้ตอนเพิ่มสินค้า
export interface ProductCreateDto {
    code: string
    product_name: string
    cost: number
}

// ใช้ตอนแก้ไขสินค้า (ห้ามแก้ code)
export interface ProductUpdateDto {
    product_name?: string
    cost?: number
    is_published?: boolean
}

// ใช้ส่งกลับ client
export interface ProductResponseDto {
    id: number
    code: string
    product_name: string
    cost: number
    created_at: Date
    updated_at: Date
    is_published: boolean
}
