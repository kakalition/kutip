@extends('root')

@section('root-view')
    <div 
        id="quotes-root" 
        data-author={{ $author }}
        data-quotes={{ $quotes }}
    />
@endsection