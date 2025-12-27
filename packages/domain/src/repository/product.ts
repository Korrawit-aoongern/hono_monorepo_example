import type { IProductEntity } from "../entity/product.js"

export interface IProductRepository {

    findAll(): Promise<IProductEntity[]>

    findById(id: number): Promise<IProductEntity | null>

    findByCode(code: string): Promise<IProductEntity | null>

    create(product: IProductEntity): Promise<IProductEntity>

    update(
        id: number,
        data: Partial<IProductEntity>
    ): Promise<IProductEntity>

    delete(id: number): Promise<boolean>
}
