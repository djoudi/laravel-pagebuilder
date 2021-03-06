@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="card">

                <form action="{{ route('pagebuilder::languages.store') }}" role="form" method="POST"  enctype="multipart/form-data">
                    {{ csrf_field() }}

                    <div class="card-header">
                        <h3>Languages</h3>
                        @lang('pagebuilder::crud.create_headline')
                    </div>

                    <div class="card-body">
                        @include('pagebuilder::notifications')

                        <div class="form-group">
                            <div class="row">
                                
                                <div class="col-md-8">
                                    <label for="name" class="control-label">Name</label>
                                    <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}">
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div class="form-group">
                            <div class="row">
                                
                                <div class="col-md-8">
                                    <label for="locale" class="control-label">ISO</label>
                                    <input id="locale" type="text" class="form-control" name="locale" value="{{ old('locale') }}">
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        
                    </div>

                    <div class="card-footer">

                        <div class="row">

                            <div class="col-sm-6">
                                <a href="{{ route('pagebuilder::languages.index') }}" class="btn btn-danger">{{ trans('pagebuilder::crud.cancel') }}</a>
                            </div>

                            <div class="col-sm-6 text-right">
                                <button type="submit" class="btn btn-success">{{ trans('pagebuilder::crud.save') }}</button>
                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>

    </div>
</div>
@stop
