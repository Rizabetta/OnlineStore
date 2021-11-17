import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'фигурка' },
            { id: 2, name: 'модель' }
        ]
        this._brands = [
            { id: 1, name: '1' },
            { id: 2, name: '2' }
        ]
        this._device = [
            { id: 1, name: '1', price: 2500, rating: 5, img: `` },
            { id: 2, name: '2', price: 2500, rating: 5, img: `` },
            { id: 3, name: '3', price: 2500, rating: 5, img: `` },
            { id: 4, name: '4', price: 2500, rating: 5, img: `` }
        ]
        makeAutoObservable(this)
    }


    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}