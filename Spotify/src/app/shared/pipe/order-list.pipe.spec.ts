import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });


  it('probando entrada y salida de valores', () => {
    const pipe = new OrderListPipe();
    const {data} : any = (mockRaw as any).default
    const result:TrackModel[] = pipe.transform(data)
  expect(result).toEqual(data)
  })

  
  it('probar si se ordena de manera ascendente', () => {
    const pipe = new OrderListPipe();
    const {data} : any = (mockRaw as any).default
    const firstValue  = data.find((i: any) => i._id ===7)
    const lastValue  = data.find((i: any) => i._id ===6)

    const result:TrackModel[] = pipe.transform(data, 'name','asc')

    const firstResult  = result[0]
    const lastResult  = result[result.length -1]

    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })

  it('probar si se ordena de manera descendente', () => {
    const pipe = new OrderListPipe();
    const {data} : any = (mockRaw as any).default
    const firstValue  = data.find((i: any) => i._id ===6)
    const lastValue  = data.find((i: any) => i._id ===7)

    const result:TrackModel[] = pipe.transform(data, 'name','desc')

    const firstResult  = result[0]
    const lastResult  = result[result.length -1]

    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })
});
