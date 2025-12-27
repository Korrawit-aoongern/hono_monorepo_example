import type {
    ProductCreateDto,
    ProductUpdateDto,
    ProductResponseDto
} from "../dto/product.dto.js"
import type { IProductRepository } from "../repository/product.js"

export class ProductService {

    constructor(
        private readonly productRepository: IProductRepository
    ) {}

    async findAll(): Promise<ProductResponseDto[]> {
        // 1. ดึงข้อมูลสินค้าทั้งหมดจาก repository
        // 2. ส่งข้อมูลกลับ
        return []
    }

    async create(dto: ProductCreateDto): Promise<ProductResponseDto> {
        // 1. ตรวจสอบว่า code ซ้ำหรือไม่ (findByCode)
        // 2. ถ้าซ้ำ ให้ throw error
        // 3. สร้าง product entity
        //    - set created_at และ updated_at เป็นเวลาปัจจุบัน
        //    - is_published = true
        // 4. บันทึกข้อมูลผ่าน repository
        // 5. ส่งข้อมูลที่บันทึกแล้วกลับ
        return {} as ProductResponseDto
    }

    async update(
        id: number,
        dto: ProductUpdateDto
    ): Promise<ProductResponseDto> {
        // 1. ค้นหาสินค้าตาม id
        // 2. ถ้าไม่พบ ให้ throw error
        // 3. ยืนยันว่าไม่สามารถแก้ไข code ได้ตาม requirement
        // 4. อัปเดตข้อมูลสินค้า
        // 5. ปรับ updated_at เป็นเวลาปัจจุบัน
        // 6. บันทึกข้อมูลผ่าน repository
        // 7. ส่งข้อมูลกลับ
        return {} as ProductResponseDto
    }

    async delete(id: number): Promise<void> {
        // 1. ค้นหาสินค้าตาม id
        // 2. ตรวจสอบว่าสินค้าถูกนำไปใช้งานหรือไม่
        //    - ถ้าไม่ ลบข้อมูลออกจากระบบ
        // 3. ถ้าถูกใช้งานแล้ว
        //    - ปรับ is_published = false
        //    - อัปเดต updated_at
    }
}
